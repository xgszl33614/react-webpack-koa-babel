const serverConfig = {
  port: 8080,
  publicPath: '/',
  compress: true,
  historyApiFallback: true,
  stats: { colors: true },
  hot: true,
  // inline:true,
  proxy: [{
    context: ['/ajax/**'],
    target: 'http://localhost:8080/'
  }],
  contentBase: '/'
}

module.exports = serverConfig
