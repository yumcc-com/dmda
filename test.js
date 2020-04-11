const dmda = require('./index')
const query = dmda([
  1,
  [2, 3],
  [4, 5, [6, 7]]
], {
  level: 1 // default: Infinity
})

console.log(query)