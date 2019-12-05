module.exports = (api) => {
  api.cache(true)

  const presets = [
    ['@babel/preset-env', {
      corejs: 3,
      shippedProposals: true,
      targets: { node: '12.13.0' },
      useBuiltIns: 'usage'
    }],
    '@babel/preset-react'
  ]

  const plugins = []

  return {
    presets,
    plugins
  }
}
