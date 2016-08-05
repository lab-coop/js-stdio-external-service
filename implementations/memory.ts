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

  function log(level: string, message: string) {
    const action = console.log({level, message})
    stdio.get(action.stream).write(action.message)
  }

  return Object.freeze({
    stdin: () => stdio.get('stdin'),
    stdout: () => stdio.get('stdout'),
    stderr: () => stdio.get('stderr'),
    console: {
      debug: message => log('debug', message),
      info: message => log('info', message),
      warn: message => log('warn', message),
      error: message => log('error', message)
    }
  })
}
