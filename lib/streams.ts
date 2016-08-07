'use strict'

import {PassThrough} from 'stream'

export const STDIO_STREAMS = ['stdin', 'stdout', 'stderr']

export function initStreams() {
  const assignNewStream = (output, stream: string) =>
    Object.assign({}, {[stream]: new PassThrough}, output)
  return STDIO_STREAMS.reduce(assignNewStream, {})
}
