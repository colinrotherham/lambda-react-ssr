const { join } = require('path')
const rules = require('./rules.cjs')

/**
 * Webpack base config
 */
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

  // Custom loaders
  module: {
    rules: [
      rules.js()
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
