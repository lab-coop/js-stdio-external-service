'use strict'

import {StdioStreams} from '../stdio'

export default function(initialOptions: StdioStreams) {
  const streams: StdioStreams = Object.assign({}, initialOptions)

  return Object.freeze({
    get: (name: string): NodeJS.ReadWriteStream => streams[name],
    getAll: (): StdioStreams => streams,
    setStream(options) {
      Object.keys(options).forEach(name => {
        streams[name] = options[name]
      })
    }
  })
}


