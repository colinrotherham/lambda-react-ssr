module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.mjs'
    ],
    react: {
      version: 'detect'
    }
  }
}
