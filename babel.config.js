module.exports = (api) => {
  api.cache(true)

  const presets = [
    ['@babel/preset-env', {
      corejs: 3,
      shippedProposals: true,
      targets: { node: '12.13.0' },
      useBuiltIns: 'usage'
    }]
  ]

  const plugins = [
    '@babel/plugin-transform-react-jsx',
    ['module-extension', {
      jsx: 'js',
      mjs: 'js'
    }]
  ]

  return {
    presets,
    plugins
  }
}
