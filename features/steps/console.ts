'use strict'

import {expect} from 'chai'
import {PassThrough} from 'stream'

export = function(): void {
  this.When(/^an? "(debug|info|warn|error)" level message sent to console: "([^"]*)"$/, function(level, message) {
    const stdio = this.container.get('stdio')
    stdio.console[level](message)
  })

  this.Then(/^it should write to "(stderr|stdout)":$/, function(stream, message) {
    const stdio = this.container.get('stdio')
    expect(stdio[stream]().read().toString()).to.equal(message)
  })
}
