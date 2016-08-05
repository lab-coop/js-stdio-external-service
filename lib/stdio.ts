'use strict'

export default function(options: Object) {
  return Object.freeze({
    get: (name: string) => options[name]
  })
}


