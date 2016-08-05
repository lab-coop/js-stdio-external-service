'use strict'

import {Stdio} from './stdio'

interface Di {
  get(name: string): ImplementationConfig,
  getImplementaion(name: string, implementation: string): Stdio
}

interface ImplementationConfig {
  stdio: string
}

export default function stdio(di: Di): Stdio {
  const implementation: string = di.get('config').stdio
  return di.getImplementaion('stdio', implementation);
}
