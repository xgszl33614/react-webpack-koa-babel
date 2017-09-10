import path from 'path'
import webpack from 'webpack'
import WebpackConfig from 'webpack-config'
import PATHS from '../config/paths'

// Export
export default new WebpackConfig().extend('[root]/base.js').merge({
  entry: {
    app: [
      'whatwg-fetch', path.join(PATHS.entry)
    ]
  },

  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [{
        loader: 'babel-loader',
        query: {
          babelrc: false,
          presets: [
            ['env', {
              targets: {
                browsers: 'chrome > 40'
              },
              // modules: false
            }],
            'react',
            'stage-0',
          ],
          plugins: [
            ['import', { libraryName: 'antd', style: 'css' }]
          ]
        }
      }]
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => (
         module.context && module.context.indexOf('node_modules') !== -1
      ),
    }),
    new webpack.DefinePlugin({
      SERVER: false,
    }),
  ],
})
