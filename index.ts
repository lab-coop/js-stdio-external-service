'use strict'

interface Di {
  get(name: string): ImplementationConfig,
  getImplementaion(name: string, implementation: string): Stdio
}

interface ImplementationConfig {
  stdio: string
}

interface Stdio {

}

export default function stdio(di: Di): Stdio {
  const implementation: string = di.get('config').stdio
  return di.getImplementaion('stdio', implementation);
}
