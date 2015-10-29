'use strict'

var test = require('tape')
var LoopingMatrix = require('../')

test('awesomeness', function (t) {
  var loopingMatrix = new LoopingMatrix(50, 50)
  loopingMatrix.setCell(1, 1, 'cake')
  t.equal(loopingMatrix.getCell(51, 51), 'cake')

  var copy = loopingMatrix.clone()
  loopingMatrix.setCell(1, 1, 'lie')
  t.equal(copy.getCell(1, 1), 'cake')
  t.end()
})
