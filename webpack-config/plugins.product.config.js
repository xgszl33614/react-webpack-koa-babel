let webpack = require('webpack')
let pluginsConfig = require('./inherit/plugins.config.js')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

// pluginsConfig.push(new webpack.optimize.UglifyJsPlugin({
//   compress: {
//     warnings: false
//   }
// }))
pluginsConfig.push(
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    prod: true,
    chunksSortMode: 'none'
  })
)
// pluginsConfig.push(new webpack.optimize.OccurenceOrderPlugin())
// pluginsConfig.push(new webpack.optimize.DedupePlugin())
// pluginsConfig.push(new webpack.optimize.AggressiveMergingPlugin())
pluginsConfig.push(
  new webpack.optimize.CommonsChunkPlugin({
    // 公共代码分离打包
    names: ['vendor', 'mainifest']
  })
)
pluginsConfig.push(
  new webpack.optimize.MinChunkSizePlugin({
    minChunkSize: 30000
  })
)
pluginsConfig.push(
  new ExtractTextPlugin({
    filename: '[name].[contenthash:6].css',
    allChunks: true // 若要按需加载 CSS 则请注释掉该行
  })
)
pluginsConfig.push(
  new webpack.DefinePlugin({
    'process.env': { // 这是给 React / Redux 打包用的
      NODE_ENV: '"production"'
    },
    // ================================
    // 配置开发全局常量
    // ================================
    __DEV__: false,
    __PROD__: true,
    __COMPONENT_DEVTOOLS__: false, // 是否使用组件形式的 Redux DevTools
    __WHY_DID_YOU_UPDATE__: false // 是否检测不必要的组件重渲染
  })
)

module.exports = pluginsConfig
