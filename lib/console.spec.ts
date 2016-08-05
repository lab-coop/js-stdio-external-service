'use strict'

import test from 'ava'
import console from './console'

test('debug should write to stdout', t => {
  t.deepEqual(console.debug('apple'), {
    stream: 'stdout',
    message: 'apple\n'
  })
})
