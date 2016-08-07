'use strict'

export interface Console {
  debug(msg: string)
  info(msg: string)
  warn(msg: string)
  error(msg: string)
}

export interface Stdio {
  console: Console,
  stdin(): NodeJS.ReadWriteStream,
  stdout(): NodeJS.ReadWriteStream,
  stderr(): NodeJS.ReadWriteStream,
}
