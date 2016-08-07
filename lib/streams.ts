'use strict'

import {PassThrough} from 'stream'

export const STDIO_STREAMS = [
  {name: 'stdin', type: 'input'},
  {name: 'stdout', type: 'output'},
  {name: 'stderr', type: 'output'},
]

export function initMockStreams() {
  const assignNewStream = (output, stream: string) =>
    Object.assign({}, {[stream]: new PassThrough}, output)
  return STDIO_STREAMS.map(s => s.name).reduce(assignNewStream, {})
}

export function pipeByType(from, to) {
  STDIO_STREAMS.forEach(stream => {
    if (stream.type === 'output') {
      from[stream.name].pipe(to[stream.name])
    } else {
      to[stream.name].pipe(from[stream.name])
    }
  })
}
