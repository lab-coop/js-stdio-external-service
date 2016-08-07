'use strict'

import {initMockStreams, pipeByType} from '../../lib/streams'

export = function() {
  this.Before(function () {
    const stdio = this.container.get('stdio')
    this.context.stdio = initMockStreams()
    const mockStreams = initMockStreams()
    pipeByType(mockStreams, stdio.getAll())
    pipeByType(mockStreams, this.context.stdio)
    stdio.setStream(mockStreams)
  })
}

