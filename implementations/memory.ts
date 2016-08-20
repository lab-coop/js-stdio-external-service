'use strict'

import {createInterface} from 'readline'
import {PassThrough} from 'stream'
const auger = require('auger') // no typings yet

import {Stdio} from '../stdio'
import stdioFactory from '../lib/stdio'
import consoleActionCreator from '../lib/console'

const FAKE_STREAMS = {
  stdin: new PassThrough,
  stdout: new PassThrough,
  stderr: new PassThrough
};

export default function memoryFactory(): Stdio {
  const stdio = stdioFactory(FAKE_STREAMS)

  function log(level: string, message: string) {
    const action = consoleActionCreator.log({level, message})
    stdio.get(action.stream).write(action.message)
  }

  function readline(promptText: string): Promise<string> {
    const rl = createInterface({
      input: stdio.get('stdin'),
      output: stdio.get('stdout')
    })
    const aug = auger(rl)
    return aug.ask(promptText)
  }

  return Object.freeze({
    readline,
    stdin: () => stdio.get('stdin'),
    stdout: () => stdio.get('stdout'),
    stderr: () => stdio.get('stderr'),
    getAll: stdio.getAll,
    console: {
      debug: message => log('debug', message),
      info: message => log('info', message),
      warn: message => log('warn', message),
      error: message => log('error', message)
    },
    setStream: stdio.setStream,
  })
}

