var autoprefixer = require('autoprefixer')
module.exports = function postcss() {
  return [autoprefixer({
    remove: false,
    browsers: ['ios >= 5', 'android >= 4.0']
  })]
}
