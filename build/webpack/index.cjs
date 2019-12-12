const { NODE_ENV } = process.env

module.exports = (env, argv) => {
  const config = require('./config.cjs')

  // Optimise for production
  if (NODE_ENV === 'production') {
    config.devtool = 'nosources-source-map'
    config.mode = 'production'
  }

  return config
}
