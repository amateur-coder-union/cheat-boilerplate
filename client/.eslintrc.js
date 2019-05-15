module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    commonjs: true
  },
  globals: {
    _global: false,
    __DEBUG__: false
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['lean-imports', 'react-hooks'],
  settings: {
    react: {
      version: '16.8.3' // React version, default to the latest React stable release
    }
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'require-jsdoc': 0,
    'object-curly-spacing': [2, 'always'],
    'valid-jsdoc': 0,
    'no-invalid-this': 0,
    'lean-imports/import': [2, ['lodash', 'zan-utils', 'date-fns']],
    'react/no-deprecated': 0,
    'react/prop-types': [2, { skipUndeclared: true }],
    'react/display-name': 0,
    'react/display-name': 0
  }
};
