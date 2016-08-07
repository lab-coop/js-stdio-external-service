'use strict'

import {expect} from 'chai'
import {Transform, PassThrough} from 'stream'

export = function(): void {
  this.Given(/^a Ceasar chiper tranform stream attached to "(stderr|stdout|stdin)":$/, function (stream) {
    const stdio = this.container.get('stdio')
    stdio.setTransformFor(stream, createTransformer())
    this.pipeStdio(stream)
  })

  this.When(/^a Buffer is sent to the "(stderr|stdout)" containing:$/, function(stream, bufferContent) {
    const stdio = this.container.get('stdio')
    stdio[stream]().write(bufferContent);
  })

  this.When(/^an? "(debug|info|warn|error)" level message sent to console: "([^"]*)"$/, function(level, message) {
    const stdio = this.container.get('stdio')
    stdio.console[level](message)
  })

  this.When(/to "([^"]*)" is written:/, function(stream, message) {
    const stdio = this.container.get('stdio')
    this.context[stream].write(message)
  })

  this.Then(/^it should write to "(stderr|stdout)":$/, function(stream, message) {
    const stdio = this.container.get('stdio')
    expect(this.context[stream].read().toString()).to.equal(message)
  })

  this.Then(/^it should read from "([^"]*)":$/, function(stream, message) {
    const stdio = this.container.get('stdio')
    expect(stdio[stream]().read().toString()).to.equal(message)
  })
}

function createTransformer() {
  const chiper = c => String.fromCharCode(c.charCodeAt(0) + 1);
  const transformer = new Transform({
    transform(chunk, encoding, callback) {
      this.push(chunk.toString().split('').map(chiper).join(''))
      callback()
    }
  })
  return transformer
}
