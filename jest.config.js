module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,mjs}'
  ],
  coverageDirectory: './test/coverage/unit',
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 60,
      lines: 50
    }
  },
  moduleFileExtensions: [
    'js',
    'jsx',
    'mjs'
  ],
  modulePathIgnorePatterns: [
    './node_modules/'
  ],
  roots: [
    './src'
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/(*.)test.{js,jsx,mjs}'
  ],
  testPathIgnorePatterns: [
    './node_modules/',
    './dist/'
  ],
  transform: {
    '^.+\\.m?jsx?$': 'babel-jest'
  }
}
