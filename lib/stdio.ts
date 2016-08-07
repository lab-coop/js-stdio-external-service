'use strict'

import {initStreams} from './streams'

interface AllStreams {
  stdin: NodeJS.ReadableStream,
  stdout: NodeJS.WritableStream,
  stderr: NodeJS.WritableStream,
}

export default function(options: AllStreams) {
  const transformers = initStreams()

  return Object.freeze({
    get: (name: string) => transformers[name],
    setTransformFor(name, transformer) {
      transformers[name] = transformer
    }
  })
}


