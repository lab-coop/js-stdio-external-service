'use strict'

import test from 'ava'
import {PassThrough} from 'stream'

import {initMockStreams} from './streams'
import streamStoreFactory from './stream-store'

test('is should create an instant', t => {
  t.truthy(streamStoreFactory(initMockStreams()))
})

test('it should use the streams from the params', t => {
  const streamStore = streamStoreFactory(initMockStreams())
  t.is(streamStore.get('stdin').constructor.name, 'PassThrough')
  t.is(streamStore.get('stdout').constructor.name, 'PassThrough')
  t.is(streamStore.get('stderr').constructor.name, 'PassThrough')
})

test('it should return all the streams', t => {
  const streamStore = streamStoreFactory(initMockStreams())
  const streams = streamStore.getAll()
  t.is(streams.stdin.constructor.name, 'PassThrough')
  t.is(streams.stdout.constructor.name, 'PassThrough')
  t.is(streams.stderr.constructor.name, 'PassThrough')
})

test('it should change the stdout stream', t => {
  const streamStore = streamStoreFactory(initMockStreams())
  const stdout = new PassThrough
  streamStore.setStream({stdout})
  streamStore.get('stdout').write('apple')
  t.is(stdout.read().toString(), 'apple')
})

test('it should change the stderr stream', t => {
  const streamStore = streamStoreFactory(initMockStreams())
  const stderr = new PassThrough
  streamStore.setStream({stderr})
  streamStore.get('stderr').write('apple')
  t.is(stderr.read().toString(), 'apple')
})

