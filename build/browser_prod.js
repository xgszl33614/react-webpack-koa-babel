/* Node */
import path from 'path'

/* NPM */
import chalk from 'chalk'
import webpack from 'webpack'
import WebpackConfig from 'webpack-config'
import WebpackChunkHash from 'webpack-chunk-hash'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin'
// import CompressionPlugin from 'compression-webpack-plugin'
// import BrotliPlugin from 'brotli-webpack-plugin'

/* Local */
import { css, webpackProgress } from './common'
import PATHS from '../config/paths'

/* --------------------Config Start-------------------*/

const BUNDLE_ANALYZER = {
  openAnalyzer: false,
}

const extractCSS = new ExtractTextPlugin({
  filename: 'assets/css/style.[contenthash].css',
  allChunks: true,
})

// Export
export default new WebpackConfig()
  .extend({
    '[root]/browser.js': config => {
      config.module.loaders.find(l => l.test.toString() === /\.(jpe?g|png|gif|svg)$/i.toString())
        .loaders.push({
          loader: 'image-webpack-loader',
          options: {},
        })
      return config
    },
  })
  .merge({
    output: {
      filename: 'assets/js/[name].[chunkhash].js',
      chunkFilename: 'assets/js/[name].[chunkhash].js',
    },
    module: {
      loaders: [
        ...css.getExtractCSSLoaders(extractCSS),
      ],
    },

    plugins: [
      webpackProgress(
        `${chalk.magenta.bold('ReactQL browser bundle')} in ${chalk.bgMagenta.white.bold('production mode')}`,
      ),

      new webpack.EnvironmentPlugin({
        NODE_ENV: 'production',
        DEBUG: false,
      }),

      new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        compress: {
          warnings: false,
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
          screw_ie8: true
        },
        output: {
          comments: false
        },
        exclude: [/\.min\.js$/gi]
      }),

      extractCSS,
      new WebpackChunkHash(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        minChunks: Infinity
      }),

      new ChunkManifestPlugin({
        filename: 'chunk-manifest.json',
        manifestVariable: 'webpackManifest'
      }),

      new ManifestPlugin({
        fileName: 'manifest.json',
        publicPath: '/'
      }),

      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'report.html',
        openAnalyzer: BUNDLE_ANALYZER.openAnalyzer
      }),

      new CopyWebpackPlugin([
        {
          from: PATHS.static,
          force: true
        },
      ]),

      new HtmlWebpackPlugin({
        template: path.resolve(PATHS.src, 'index.html'),
        filename: 'index.html'
      }),

      // new CompressionPlugin({
      //   // Use Zopfli compression
      //   algorithm: 'zopfli',
      //   // Overwrite the default 80% compression-- anything is better than
      //   // nothing
      //   minRatio: 0.99,
      // }),
      // new BrotliPlugin({
      //   // Overwrite the default 80% compression-- anything is better than
      //   // nothing
      //   minRatio: 0.99,
      // }),
    ]
  })
