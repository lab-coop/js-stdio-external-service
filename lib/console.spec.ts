'use strict'

import test from 'ava'
import console from './console'

test('it should add a new line after the message', t => {
  const {message} = console.log({level: 'debug', message: 'apple'})
  t.deepEqual(message, 'apple\n')
})

test('debug should write to stdout', t => {
  const {stream} = console.log({level: 'debug', message: 'apple'})
  t.deepEqual(stream, 'stdout')
})

test('info should write to stdout', t => {
  const {stream} = console.log({level: 'info', message: 'apple'})
  t.deepEqual(stream, 'stdout')
})

test('warn should write to stdout', t => {
  const {stream} = console.log({level: 'warn', message: 'apple'})
  t.deepEqual(stream, 'stderr')
})

test('error should write to stdout', t => {
  const {stream} = console.log({level: 'error', message: 'apple'})
  t.deepEqual(stream, 'stderr')
})
