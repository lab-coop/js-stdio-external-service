'use strict'

import test from 'ava'

import {initMockStreams, pipeByType} from './streams'

test('it should init all streams', t => {
  const streams = initMockStreams()
  t.is(streams.stdin.constructor.name, 'PassThrough')
  t.is(streams.stdout.constructor.name, 'PassThrough')
  t.is(streams.stderr.constructor.name, 'PassThrough')
})

test('it should pipe the streams', t => {
  const streams1 = initMockStreams()
  const streams2 = initMockStreams()
  pipeByType(streams1, streams2)
  streams1.stdout.write('apple')
  t.is(streams2.stdout.read().toString(), 'apple')
  streams1.stderr.write('apple')
  t.is(streams2.stderr.read().toString(), 'apple')
  streams2.stdin.write('apple')
  t.is(streams1.stdin.read().toString(), 'apple')
})
