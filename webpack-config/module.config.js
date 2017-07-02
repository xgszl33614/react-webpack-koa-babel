// var ExtractTextPlugin = require('extract-text-webpack-plugin')
var src = require('./base/dir-vars.config').srcDir
var isProduction = process.env.NODE_ENV === 'production'
console.log(process.env.NODE_ENV)
// var autoprefixer = require('autoprefixer')

module.exports = {
  loaders: [{
    test: /\.(js|jsx)$/,
    loaders: (() => {
      const loaders = ['babel-loader?' + JSON.stringify({
        cacheDirectory: true,
        plugins: [
          'transform-runtime',
          'transform-decorators-legacy'
        ],
        presets: ['es2015', 'react', 'stage-0'],
        env: {
          production: {
            presets: ['react-optimize']
          }
        }
      }), 'eslint-loader']
      return loaders
    })(),
    include: src,
    exclude: /node_modules/
  }, {
    test: /\.json$/,
    loader: 'json-loader'
  }, {
    test: /\.html$/,
    loader: 'html-loader'
  }, {
    test: /\.css$/,
    // exclude: /node_modules/,
    loaders: ['style-loader', 'css-loader?minimize!postcss-loader']
    // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!postcss-loader')
  }, {
    test: /\.scss$/,
    include: src,
    loaders: ['style-loader', 'css-loader?minimize!postcss-loader!sass-loader']
    // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!postcss-loader!sass-loader')
  }, {
    test: /\.(png|jpe?g|gif|svg)$/,
    // loader: 'url',
    loader: 'url-loader?limit=2024&name=' + 'images/[name]' + (isProduction ? '.[hash]' : '') + '.[ext]'
    // query: {
    //   limit: 2000, // 10KB 以下使用 base64
    //   name: 'images/[name]' + (isProduction ? '.[hash]' : '') + '.[ext]'
    // }
  }, {
    test: /\.(woff2?|eot|ttf|otf)$/,
    loader: 'url-loader?limit=10240&name=' + 'images/[name]' + (isProduction ? '.[hash]' : '') + '.[ext]'
  }]
}
