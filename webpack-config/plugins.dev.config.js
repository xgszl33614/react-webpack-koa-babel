let webpack = require('webpack')
let pluginsConfig = require('./inherit/plugins.config.js')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

pluginsConfig.push(new ExtractTextPlugin('[name].css'))
// pluginsConfig.push(new webpack.optimize.OccurenceOrderPlugin())
pluginsConfig.push(new webpack.HotModuleReplacementPlugin())
pluginsConfig.push(new webpack.NoEmitOnErrorsPlugin())
pluginsConfig.push(
  new HtmlWebpackPlugin({
    title: 'react-production',
    template: './src/index.html',
    filename: 'index.html',
    hash: true,
    dev: true,
    chunksSortMode: 'none'
  })
)
pluginsConfig.push(
  new webpack.DefinePlugin({
    'process.env': { // 这是给 React / Redux 打包用的
      NODE_ENV: JSON.stringify('development')
    },
    // ================================
    // 配置开发全局常量
    // ================================
    __DEV__: true,
    __PROD__: false,
    __COMPONENT_DEVTOOLS__: true, // 是否使用组件形式的 Redux DevTools
    __WHY_DID_YOU_UPDATE__: false // 是否检测不必要的组件重渲染
  })
)
pluginsConfig.push(
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: require('./vendor/postcss.config.js'),
      devServer: require('./server.config.js')
    }
  })
)

module.exports = pluginsConfig
