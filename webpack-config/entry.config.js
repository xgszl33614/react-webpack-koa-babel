let entry = require('./base/dir-vars.config.js').entryDir
let configEntry = {
  app: [entry],
  // ================================
  // 框架 / 类库 分离打包
  // ================================
  vendor: [
    // 'history',
    // 'lodash',
    // 'react',
    // 'react-dom',
    // 'react-redux',
    // 'react-router',
    // 'react-router-redux',
    // 'redux',
    // 'redux-thunk'
    // 'material-ui',
    'classnames'
  ]
}
module.exports = configEntry
