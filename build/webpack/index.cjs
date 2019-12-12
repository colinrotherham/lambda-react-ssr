const { NODE_ENV } = process.env
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, argv) => {
  const config = require('./config.cjs')

  // Optimise for production
  if (NODE_ENV === 'production') {
    config.devtool = 'nosources-source-map'
    config.mode = 'production'

    // Compress output JS
    config.optimization = {
      minimize: true,
      minimizer: [new TerserPlugin({
        terserOptions: {
          output: { comments: false }
        },
        extractComments: false
      })]
    }
  }

  return config
}
