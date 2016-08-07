'use strict'

export = function() {
  this.Before(function () {
    this.pipeAllStdio()
  })
}

