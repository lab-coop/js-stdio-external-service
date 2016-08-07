'use strict'

import {expect} from 'chai'
import {PassThrough} from 'stream'

export = function(): void {
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
    this.context.stdio[stream].write(message)
  })

  this.Then(/^it should write to "(stderr|stdout)":$/, function(stream, message) {
    const stdio = this.container.get('stdio')
    expect(this.context.stdio[stream].read().toString()).to.equal(message)
  })

  this.Then(/^it should read from "([^"]*)":$/, function(stream, message) {
    const stdio = this.container.get('stdio')
    expect(stdio[stream]().read().toString()).to.equal(message)
  })
}

