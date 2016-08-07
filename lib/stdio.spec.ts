'use strict'

import test from 'ava'
import {PassThrough} from 'stream'

import {initMockStreams} from './streams'
import stdioFactory from './stdio'

test('is should create an instant', t => {
  t.truthy(stdioFactory(initMockStreams()))
})

test('it should use the streams from the params', t => {
  const stdio = stdioFactory(initMockStreams())
  t.is(stdio.get('stdin').constructor.name, 'PassThrough')
  t.is(stdio.get('stdout').constructor.name, 'PassThrough')
  t.is(stdio.get('stderr').constructor.name, 'PassThrough')
})

test('it should return all the streams', t => {
  const stdio = stdioFactory(initMockStreams())
  const streams = stdio.getAll()
  t.is(streams.stdin.constructor.name, 'PassThrough')
  t.is(streams.stdout.constructor.name, 'PassThrough')
  t.is(streams.stderr.constructor.name, 'PassThrough')
})

test('it should change the stdout stream', t => {
  const stdio = stdioFactory(initMockStreams())
  const stdout = new PassThrough
  stdio.setStream({stdout})
  stdio.get('stdout').write('apple')
  t.is(stdout.read().toString(), 'apple')
})

test('it should change the stderr stream', t => {
  const stdio = stdioFactory(initMockStreams())
  const stderr = new PassThrough
  stdio.setStream({stderr})
  stdio.get('stderr').write('apple')
  t.is(stderr.read().toString(), 'apple')
})

