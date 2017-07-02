/* NODE */
import path from 'path'
/* NPM */
import webpack from 'webpack'
import WebpackConfig from 'webpack-config'
import chalk from 'chalk'
/* Local */
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { css, stats } from './common'
import logServerStarted from './lib/console'
import { getHost, getPort, getURL } from './lib/env'
import PATHS from '../config/paths'

const HOST = getHost()
const PORT = getPort()
const LOCAL = getURL()

export default new WebpackConfig().extend({
  '[root]/browser.js': conf => {
    conf.entry.app.unshift(
      'react-hot-loader/patch',
      `webpack-dev-server/client?${LOCAL}`,
      'webpack/hot/only-dev-server',
    )

    conf.module.loaders.find(l => l.test.toString() === /\.jsx?$/.toString())
      .loaders.unshift({
        loader: 'react-hot-loader/webpack',
      })

    return conf
  },
}, '[root]/dev.js').merge({
  module: {
    loaders: [
      ...css.getDevLoaders(),
    ],
  },
  devServer: {
    host: HOST,
    port: PORT,
    compress: true,
    publicPath: '/',
    inline: true,
    hot: true,
    noInfo: false,
    overlay: true,
    historyApiFallback: true,
    stats
    // contentBase: [
    //   PATHS.src,
    // ],
    // historyApiFallback: {
    //   index: '/index.html',
    // },
  },
  output: {
    publicPath: `${LOCAL}/`
  },
  plugins: [
    {
      apply(compiler) {
        compiler.plugin('done', () => {
          logServerStarted({
            type: 'hot-reloading browser',
            host: HOST,
            port: PORT,
            chalk: chalk.bgMagenta.white
          })
        })
      }
    },
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(PATHS.src, 'index.html')
    })
  ]
})
