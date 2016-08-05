'use strict'

import test from 'ava'
import stdioFactory from './stdio'

test('is should create and instant', t => {
  t.truthy(stdioFactory({}))
})

test('it should provide transport stream for stdin, stdout, stderr', t => {
  const stdio = stdioFactory({
    stdin: 1,
    stdout: 1,
    stderr: 1
  })
  t.truthy(stdio.get('stdin'))
  t.truthy(stdio.get('stdout'))
  t.truthy(stdio.get('stderr'))
})


