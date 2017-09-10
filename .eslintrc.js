// require('babel-register')
const path = require('path')
const baseRules = require('eslint-config-airbnb-base/rules/style')
const [_, ...restricted] = baseRules.rules['no-restricted-syntax']

// const PATHS = require('./config/paths')

module.exports = {
  extends: 'airbnb',
  // extends: ["standard", "standard-react"],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    jsx: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: [
    'babel',
    'import',
    'jsx-a11y',
    'compat',
  ],
  // add your custom rules here
  rules: {
    "no-plusplus": 0,
    "no-param-reassign": 0,
    "semi": [2, "never"],
    "generator-star-spacing": 0,
    "react/prefer-stateless-function": 1, // ---
    'no-unused-expressions': [2, { 'allowShortCircuit': true, 'allowTernary': true }],
    "react/no-array-index-key": 0, // ---
    "max-len": [1, 100],
    "react/prop-types": 0, // ---
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-no-bind": 0, // ---
    "jsx-a11y/no-static-element-interactions": 0,
    "space-before-function-paren": 0,
    "import/no-extraneous-dependencies": 0,
    "prefer-const": "warn",
    "comma-dangle": ["error", "only-multiline"],
    'no-extra-semi': ['error'],
    'arrow-parens': 0,
    // 'arrow-parens': ['error', 'as-needed'],
    'react/forbid-prop-types': [1, { forbid: ['any']} ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/no-multi-comp': 0,
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-restricted-syntax': [2,
      ...restricted.filter(
        r => !['ForOfStatement'].includes(r.selector)
      ),
    ],
    'global-require': 0,
    'import/no-unresolved': [2, { commonjs: true }],
    'compat/compat': 2
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './build/base.js',
        // config: './webpack.config.babel.js',
      },
      polyfills: ['fetch'],
    }
  },
  globals: {
    SERVER: false,
  },
}
