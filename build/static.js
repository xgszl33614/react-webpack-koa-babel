import path from 'path'
import WebpackConfig from 'webpack-config'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// Local
import PATHS from '../config/paths'

export default new WebpackConfig().extend('[root]/browser_prod.js').merge({
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATHS.src, 'index.html'),
      filename: 'index.html'
    }),
  ],
})
