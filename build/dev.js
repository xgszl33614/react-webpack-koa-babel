/* NPM */
import webpack from 'webpack'
import WebpackConfig from 'webpack-config'

export default new WebpackConfig().merge({
  devtool: 'source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true
    })
  ]
})
