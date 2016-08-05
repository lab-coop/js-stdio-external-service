'use strict'

import test from 'ava'
import console from './console'

test('debug should write to stdout', t => {
  t.deepEqual(console.log({level: 'debug', message: 'apple'}), {
    stream: 'stdout',
    message: 'apple\n'
  })
})
