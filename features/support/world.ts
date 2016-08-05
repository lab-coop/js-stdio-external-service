'use strict'

import stdio from '../../'

// Till the di and config service is not ready
import memoryFactory from '../../implementations/memory'
const mockDi = {
  get: () => ({stdio: 'memory'}),
  getImplementaion: () => memoryFactory()
}

class World {
  container: any

  constructor() {
    const instances = {
      stdio: stdio(mockDi)
    };

    this.container = {
      get: (name) => instances[name]
    }
  }
}


export = function(): void {
  this.World = World
}
