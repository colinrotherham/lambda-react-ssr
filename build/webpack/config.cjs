const { join, resolve } = require('path')
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin')
const rules = require('./rules.cjs')

/**
 * Webpack base config
 */
module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',

  // Exclude per-module stats
  stats: {
    children: false,
    modules: false
  },

  // Pack for Node.js applications
  target: 'node',

  // Application and preview server
  entry: {
    index: join(process.cwd(), 'src/index.jsx'),
    server: join(process.cwd(), 'src/server.mjs'),
    styles: join(process.cwd(), 'src/public/assets/css/styles.pcss')
  },

  // Custom loaders
  module: {
    rules: [
      rules.js(),
      rules.css()
    ]
  },

  // Output to ./dist
  output: {
    libraryTarget: 'commonjs2',
    path: join(process.cwd(), 'dist')
  },

  plugins: [
    new FixStyleOnlyEntriesPlugin({
      extensions: ['css', 'pcss'],
      silent: true
    }),
    new MiniCssExtractPlugin({
      filename: 'public/assets/css/[name].css'
    }),
    new NodemonPlugin({
      quiet: true,
      exec: 'cd ./dist && node --inspect server.js',
      watch: resolve('./dist')
    })
  ],

  // Handle additional extensions
  resolve: {
    extensions: ['.cjs', '.js', '.jsx', '.mjs']
  }
}
