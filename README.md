# looping-matrix

[![Build Status][travis-image]][travis-url]
[![npm][npm-image]][npm-url]
[![npm Downloads][downloads-image]][downloads-url]
[![Coverage Status][coveralls-image]][coveralls-url]

A matrix that loops from edge to edge.

## Install

```sh
$ npm install --save looping-matrix
```

## Usage

```js
var LoopingMatrix = require('looping-matrix');
var loopingMatrix = new LoopingMatrix(50, 50);
loopingMatrix.setCell(1, 1, 'cake')
loopingMatrix.getCell(51, 51) // => 'cake'

var copy = loopingMatrix.clone()
loopingMatrix.setCell(1, 1, 'lie')
copy.getCell(1, 1) // => 'cake'
```


## API


* [LoopingMatrix](#LoopingMatrix)
  * [new LoopingMatrix(width, height)](#new_LoopingMatrix_new)
  * [.reset(value)](#LoopingMatrix+reset)
  * [.loopPosition(i, j)](#LoopingMatrix+loopPosition) ⇒ <code>[Position](#Position)</code>
  * [.getCell(i, j)](#LoopingMatrix+getCell) ⇒ <code>\*</code>
  * [.setCell(i, j, val)](#LoopingMatrix+setCell)
  * [.copyMatrixAt(i, j)](#LoopingMatrix+copyMatrixAt)
  * [.clone()](#LoopingMatrix+clone) ⇒ <code>[LoopingMatrix](#LoopingMatrix)</code>

<a name="new_LoopingMatrix_new"></a>
### new LoopingMatrix(width, height)
A matrix that loops indexes from edge to edge.


| Param | Type |
| --- | --- |
| width | <code>number</code> | 
| height | <code>number</code> | 

<a name="LoopingMatrix+reset"></a>
### loopingMatrix.reset(value)
Reset all the positions in the matrix to a given value.

**Kind**: instance method of <code>[LoopingMatrix](#LoopingMatrix)</code>  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>number</code> | value to be set on all the matrix' positions |

<a name="LoopingMatrix+loopPosition"></a>
### loopingMatrix.loopPosition(i, j) ⇒ <code>[Position](#Position)</code>
In case the given position lays outside the matrix, loop the position from edge to edge.

**Kind**: instance method of <code>[LoopingMatrix](#LoopingMatrix)</code>  
**Returns**: <code>[Position](#Position)</code> - the looped position  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | the column index of the position |
| j | <code>number</code> | the row index of the position |

<a name="LoopingMatrix+getCell"></a>
### loopingMatrix.getCell(i, j) ⇒ <code>\*</code>
Returns the value of the given position.

**Kind**: instance method of <code>[LoopingMatrix](#LoopingMatrix)</code>  
**Returns**: <code>\*</code> - the value of the position  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | the column index of the position |
| j | <code>number</code> | the row index of the position |

<a name="LoopingMatrix+setCell"></a>
### loopingMatrix.setCell(i, j, val)
Set the value of the given position.

**Kind**: instance method of <code>[LoopingMatrix](#LoopingMatrix)</code>  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | the column index of the position |
| j | <code>number</code> | the row index of the position |
| val | <code>\*</code> | the value to set in the given position |

<a name="LoopingMatrix+copyMatrixAt"></a>
### loopingMatrix.copyMatrixAt(i, j)
Copy a source matrix into this matrix starting at the given position of this matrix.

**Kind**: instance method of <code>[LoopingMatrix](#LoopingMatrix)</code>  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | the column index of the start position |
| j | <code>number</code> | the row index of the start position |

<a name="LoopingMatrix+clone"></a>
### loopingMatrix.clone() ⇒ <code>[LoopingMatrix](#LoopingMatrix)</code>
Makes a copy of this matrix.

**Kind**: instance method of <code>[LoopingMatrix](#LoopingMatrix)</code>  
**Returns**: <code>[LoopingMatrix](#LoopingMatrix)</code> - the clone  
<a name="Position"></a>
### Position : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | The column index of the position |
| j | <code>number</code> | The row index of the position |

## License

MIT © [David da Silva](http://dasilvacont.in)

[travis-image]: https://travis-ci.org/dasilvacontin/looping-matrix.svg?branch=master
[travis-url]: https://travis-ci.org/dasilvacontin/looping-matrix
[npm-image]: https://img.shields.io/npm/v/looping-matrix.svg?style=flat
[npm-url]: https://npmjs.org/package/looping-matrix
[downloads-image]: http://img.shields.io/npm/dm/looping-matrix.svg
[downloads-url]: https://www.npmjs.org/package/looping-matrix
[coveralls-image]: https://coveralls.io/repos/dasilvacontin/looping-matrix/badge.svg
[coveralls-url]: https://coveralls.io/r/dasilvacontin/looping-matrix

