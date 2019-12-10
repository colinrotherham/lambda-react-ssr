module.exports = {
  env: {
    'jest/globals': true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: [
    'jest'
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
