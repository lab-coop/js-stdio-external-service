'use strict'


import test from 'ava'

import {initStreams} from './streams'
import stdioFactory from './stdio'
test('is should create an instant', t => {
  t.truthy(stdioFactory(initStreams()))
})
/*
test('it should provide transport stream for stdin, stdout, stderr', t => {
  const stdio = stdioFactory(initStreams())
  t.truthy(stdio.get('stdin'))
  t.truthy(stdio.get('stdout'))
  t.truthy(stdio.get('stderr'))
})

test('it should have default pass through streams as transform', t => {
  const stdio = stdioFactory(initStreams())
  t.is(stdio.get('stdin').constructor.name, 'PassThrough')
  t.is(stdio.get('stdout').constructor.name, 'PassThrough')
  t.is(stdio.get('stderr').constructor.name, 'PassThrough')
})

test('it should pipe the transports to the std', t => {
  const std = initStreams()
  const stdio = stdioFactory(std)
  stdio.get('stdout').write('apple')
  t.is(std.stdout.read().toString(), 'apple')
})
*/
