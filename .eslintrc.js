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
      '.cjs',
      '.js',
      '.jsx',
      '.mjs'
    ],
    "import/resolver": {
      node: {
        extensions: [
          '.cjs',
          '.js',
          '.jsx',
          '.mjs'
        ]
      }
    },
    react: {
      version: 'detect'
    }
  }
}
