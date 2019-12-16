const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/**
 * Match and process JS
 */
module.exports.js = () => ({
  exclude: /node_modules/,
  test: /\.m?jsx?$/,
  type: 'javascript/auto',
  use: { loader: 'babel-loader' }
})

/**
 * Match and process CSS
 */
module.exports.css = () => ({
  exclude: /node_modules/,
  test: /\.p?css$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: true
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true
      }
    }
  ]
})
