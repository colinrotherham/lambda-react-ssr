const { NODE_ENV } = process.env
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

/**
 * Webpack config by environment
 */
module.exports = (env, argv) => {
  const config = require('./config.cjs')

  // Optimise for production
  if (NODE_ENV === 'production') {
    config.devtool = 'nosources-source-map'
    config.mode = 'production'

    // Compress output CSS/JS
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: { output: { comments: false } },
          extractComments: false
        }),
        new OptimizeCSSAssetsPlugin()
      ]
    }
  }

  return config
}
