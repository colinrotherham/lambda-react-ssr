const { join } = require('path')

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  target: 'node',
  stats: {
    modules: false
  },
  entry: {
    index: join(__dirname, 'src/index.jsx'),
    server: join(__dirname, 'src/server.mjs')
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.m?jsx?$/,
        type: 'javascript/auto',
        use: [{
          loader: 'babel-loader'
        }]
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs2',
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs']
  }
}
