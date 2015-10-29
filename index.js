/*
 * looping-matrix
 *
 * Copyright (c) 2015 David da Silva
 * Licensed under the MIT license.
 */

'use strict'

/**
 * @typedef Position
 * @type Object
 * @property {number} i The column index of the position
 * @property {number} j The row index of the position
 */

/**
 * A matrix that loops indexes from edge to edge.
 * @constructor
 * @param width {number}
 * @param height {number}
 */
function LoopingMatrix (width, height) {
  this.width = width
  this.height = height
  this.matrix = new Array(height)
  for (var i = 0; i < height; ++i) {
    var row = new Array(width)
    this.matrix[i] = row
  }
}

/**
 * Reset all the positions in the matrix to a given value.
 * @param value {number} value to be set on all the matrix' positions
 */
LoopingMatrix.prototype.reset = function LoopingMatrix$prototype$reset (value) {
  for (var i = 0; i < this.height; ++i) {
    for (var j = 0; j < this.width; ++j) {
      this.matrix[i][j] = value
    }
  }
}

/**
 * In case the given position lays outside the matrix, loop the position from edge to edge.
 * @param i {number} the column index of the position
 * @param j {number} the row index of the position
 * @return {Position} the looped position
 */
LoopingMatrix.prototype.loopPosition = function LoopingMatrix$prototype$loopPosition (i, j) {
  if (i < 0) {
    i -= Math.floor(i / this.height) * this.height
  } else if (i >= this.height) {
    i %= this.height
  }
  if (j < 0) {
    j -= Math.floor(j / this.width) * this.width
  } else if (j >= this.width) {
    j %= this.width
  }
  return {i: i, j: j}
}

/**
 * Returns the value of the given position.
 * @param i {number} the column index of the position
 * @param j {number} the row index of the position
 * @return {*} the value of the position
 */
LoopingMatrix.prototype.getCell = function LoopingMatrix$prototype$getCell (i, j) {
  var pos = this.loopPosition(i, j)
  return this.matrix[pos.i][pos.j]
}

/**
 * Set the value of the given position.
 * @param i {number} the column index of the position
 * @param j {number} the row index of the position
 * @param val {*} the value to set in the given position
 */
LoopingMatrix.prototype.setCell = function LoopingMatrix$prototype$setCell (i, j, val) {
  var pos = this.loopPosition(i, j)
  this.matrix[pos.i][pos.j] = val
}

/**
 * Copy a source matrix into this matrix starting at the given position of this matrix.
 * @param i {number} the column index of the start position
 * @param j {number} the row index of the start position
 */
LoopingMatrix.prototype.copyMatrixAt = function LoopingMatrix$prototype$copyMatrixAt (i, j, source) {
  for (var mi = 0; mi < source.length; ++mi) {
    var row = source[mi]
    for (var mj = 0; mj < row.length; ++mj) {
      this.setCell(i + mi, j + mj, row[mj])
    }
  }
}

/**
 * Makes a copy of this matrix.
 * @return {LoopingMatrix} the clone
 */
LoopingMatrix.prototype.clone = function LoopingMatrix$prototype$clone () {
  var copy = new this.constructor(0, 0)
  copy.width = this.width
  copy.height = this.height
  copy.matrix = new Array(copy.height)
  for (var i = 0; i < copy.height; ++i) {
    copy.matrix[i] = this.matrix[i].slice(0)
  }
  return copy
}

module.exports = LoopingMatrix

