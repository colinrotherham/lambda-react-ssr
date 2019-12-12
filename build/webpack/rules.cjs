/**
 * Match and process JS
 */
module.exports.js = () => ({
  exclude: /node_modules/,
  test: /\.m?jsx?$/,
  type: 'javascript/auto',
  use: { loader: 'babel-loader' }
})
