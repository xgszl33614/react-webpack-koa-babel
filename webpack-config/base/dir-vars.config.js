var root = require('../root')
var path = require('path')
var exports = {}

exports._root = path.resolve(__dirname, './') // 项目根目录
// 源文件目录
exports.srcDir = root('src') // 业务代码根目录
exports.distDir = root('dist') // 业务代码构建根目录
exports.entryDir = root('src/app.js') // 打包入口
exports.staticDir = root('static') // 打包入口

module.exports = exports
