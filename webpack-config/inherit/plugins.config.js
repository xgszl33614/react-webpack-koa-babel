let webpack = require('webpack')
let NyanProgressPlugin = require('nyan-progress-webpack-plugin')

var configPlugins = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    'window.$': 'jquery'
  }),
  new NyanProgressPlugin() // 进度条
]

module.exports = configPlugins
