let a = require('./a') // (1)
console.log(a)
module.exports.bar = function () {
  a.foo() // OK (2)
}
