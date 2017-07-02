var path = require('path')
var src = require('./base/dir-vars.config.js').srcDir // src目录

module.exports = {
  alias: {
    ASSET: path.join(src, 'assets'),
    COMPONENT: path.join(src, 'components'),
    ACTION: path.join(src, 'redux/actions'),
    REDUCER: path.join(src, 'redux/reducers'),
    STORE: path.join(src, 'redux/store'),
    ROUTE: path.join(src, 'routes'),
    SERVICE: path.join(src, 'services'),
    UTIL: path.join(src, 'utils'),
    HOC: path.join(src, 'utils/HoC'),
    MIXIN: path.join(src, 'utils/mixins'),
    IMAGE: path.join(src, 'assets/images'),
    VIEW: path.join(src, 'views')
  },
  extensions: ['.js', '.jsx', '.css']
}
