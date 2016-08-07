'use strict'

import {PassThrough} from 'stream'

import stdioFactory from '../../'
import {STDIO_STREAMS, initStreams} from '../../lib/streams'

// Till the di and config service is not ready
import memoryFactory from '../../implementations/memory'
const mockDi = {
  get: () => ({stdio: 'memory'}),
  getImplementaion: () => memoryFactory()
}

class World {
  container: any
  context: any

  constructor() {
    this.context = initStreams()

    const instances = {
      stdio: stdioFactory(mockDi)
    }

    this.container = {
      get: (name) => instances[name]
    }
  }

  pipeAllStdio() {
    STDIO_STREAMS.forEach((s) => this.pipeStdio(s))
  }

  pipeStdio(stream) {
    const stdio = this.container.get('stdio')
    if (stream === 'stdin') {
      this.context.stdin.pipe(stdio.stdin())
    } else {
      stdio[stream]().pipe(this.context[stream])
    }
  }
}


export = function(): void {
  this.World = World
}
