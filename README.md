# Deconstruct Multi Dimension Array

Deconstruct Multi Dimension Array!（Multi to One OR Multi to Multi）

### Installation

````javascript
npm i --save dmda
````

### Usage

````javascript
const dmda = require('dmda')
````

### Example

````javascript
const query = dmda([1, 2, [3, 'yumcc', ['dadm', 999, ['5', 4]]], 4])
````

returns

````
[ 1, 2, 3, 'yumcc', 'dadm', 999, '5', 4, 4 ]
````

### Options

````javascript
const query = dmda([
  1,
  2,
  3,
  4,
  4,
  2,
  4,
  5,
  7
], {
  isRepeat: true // default: false
})
````

returns

````
[ 1, 2, 3, 4, 5, 7 ]
````

````javascript
const query = dmda([
  1,
  [2, 3],
  [4, 5, [6, 7]]
], {
  level: 1 // default: Infinity
})
````

returns

````
[ 1, 2, 3, 4, 5, [ 6, 7 ] ]
````