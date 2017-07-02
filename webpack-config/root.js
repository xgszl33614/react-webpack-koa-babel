var path = require('path')
function root(args) {
  return path.join(__dirname, '..', args)
}
module.exports = root
