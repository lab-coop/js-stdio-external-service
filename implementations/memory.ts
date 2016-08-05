'use strict'

import {PassThrough} from 'stream'
import stdioFactory from '../lib/stdio'
import console from '../lib/console'

export default function memoryFactory() {
  const stdio = stdioFactory({
    stdin: new PassThrough,
    stdout: new PassThrough,
    stderr: new PassThrough
  })

  return Object.freeze({
    stdin: () => stdio.get('stdin'),
    stdout: () => stdio.get('stdout'),
    stderr: () => stdio.get('stderr'),
    console: {
      debug(message) {
        const action = console.debug(message)
        stdio.get(action.stream).write(action.message)
      },
      info() {},
      warn() {},
      error() {}
    }
  })
}
