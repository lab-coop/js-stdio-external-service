'use strict'

import {createInterface} from 'readline'
import {PassThrough} from 'stream'
const auger = require('auger') // no typings yet

import {Stdio} from '../stdio'
import streamStoreFactory from '../lib/stream-store'
import consoleActionCreator from '../lib/console'

const FAKE_STREAMS = {
  stdin: new PassThrough,
  stdout: new PassThrough,
  stderr: new PassThrough
};

export default function memoryFactory(): Stdio {
  const streamStore = streamStoreFactory(FAKE_STREAMS)

  function log(level: string, message: string) {
    const action = consoleActionCreator.log({level, message})
    streamStore.get(action.stream).write(action.message)
  }

  function readline(promptText: string): Promise<string> {
    const rl = createInterface({
      input: streamStore.get('stdin'),
      output: streamStore.get('stdout')
    })
    const aug = auger(rl)
    return aug.ask(promptText)
  }

  return Object.freeze({
    readline,
    stdin: () => streamStore.get('stdin'),
    stdout: () => streamStore.get('stdout'),
    stderr: () => streamStore.get('stderr'),
    getAll: streamStore.getAll,
    console: {
      debug: message => log('debug', message),
      info: message => log('info', message),
      warn: message => log('warn', message),
      error: message => log('error', message)
    },
    setStream: streamStore.setStream,
  })
}

