'use strict'

const STREAM_BY_METHOD = {
  debug: 'stdout'
}

export default {
  debug(message: string): {stream: string, message: string} {
    return {
      stream: STREAM_BY_METHOD['debug'],
      message: message + '\n'
    }
  }
}
