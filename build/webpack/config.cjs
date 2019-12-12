const { join } = require('path')

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',

  // Exclude per-module stats
  stats: { modules: false },

  // Pack for Node.js applications
  target: 'node',

  // Application and preview server
  entry: {
    index: join(process.cwd(), 'src/index.jsx'),
    server: join(process.cwd(), 'src/server.mjs')
  },

  // Transpile via babel.config.js
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.m?jsx?$/,
        type: 'javascript/auto',
        use: { loader: 'babel-loader' }
      }
    ]
  },

  // Output CommonJS for Node.js
  output: {
    libraryTarget: 'commonjs2',
    path: join(process.cwd(), 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[file].map'
  },

  // Handle additional extensions
  resolve: {
    extensions: ['.js', '.jsx', '.mjs']
  }
}
