var dist = require('./base/dir-vars.config.js').distDir
module.exports = {
  path: dist,
  publicPath: '/front/dist/',
  filename: '[name].[hash].js',    // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
  chunkFilename: '[id].js'
}
