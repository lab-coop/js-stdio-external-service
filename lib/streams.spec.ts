'use strict'

import test from 'ava'

import {initStreams} from './streams'

test('it should init all streams', t => {
  const streams = initStreams()
  t.is(streams.stdin.constructor.name, 'PassThrough')
  t.is(streams.stdout.constructor.name, 'PassThrough')
  t.is(streams.stderr.constructor.name, 'PassThrough')
})
