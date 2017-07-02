import path from 'path'
import webpack from 'webpack'
import WebpackConfig from 'webpack-config'
import { stats } from './common'
import PATHS from '../config/paths'

// Export
export default new WebpackConfig().merge({
  stats,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      PATHS.root,
      'node_modules'
    ],
    alias: {
      COMPONENT: path.join(PATHS.src, '/component')
    }
  },
  module: {
    loaders: [
      {
        test: /\.(woff|woff2|ttf|eot)$/i,
        loader: 'file-loader',
        query: {
          name: 'assets/fonts/[name].[hash].[ext]',
        }
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          {
            loader: 'file-loader',
            query: {
              name: 'assets/img/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: '[name].js',
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        context: PATHS.src,
        imageWebpackLoader: {
          mozjpeg: {
            quality: 65
          },
          pngquant: {
            quality: '65-90',
            speed: 4
          },
          svgo: {
            plugins: [
              { removeViewBox: false },
              { removeEmptyAttrs: false }
            ]
          }
        }
      }
    })
  ]
})
