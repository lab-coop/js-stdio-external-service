'use strict'

const STREAM_BY_METHOD = {
  debug: 'stdout',
  info: 'stdout'
}

export default {
  log({level, message}: {level: string, message: string}): {stream: string, message: string} {
    return {
      stream: STREAM_BY_METHOD[level],
      message: message + '\n'
    }
  }
}
