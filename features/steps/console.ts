'use strict'

import {expect} from 'chai'
import {PassThrough} from 'stream'

export = function(): void {
  this.When(/^debug message sent to console: "([^"]*)"$/, function(message) {
    const stdio = this.container.get('stdio')
    stdio.console.debug(message)
  })

  this.When(/^info message sent to console: "([^"]*)"$/, function(message) {
    const stdio = this.container.get('stdio')
    stdio.console.info(message)
  })

  this.Then(/^it should write to standard out:$/, function(message) {
    const stdio = this.container.get('stdio')
    expect(stdio.stdout().read().toString()).to.equal(message)
  })
}
