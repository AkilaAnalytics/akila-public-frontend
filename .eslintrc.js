/** @type {import('eslint').Linter.Config} */
// source for using eslint-plugin-import: https://github.com/remix-run/remix/discussions/3090
// https://kentcdodds.com/blog/common-mistakes-with-react-testing-library
module.exports = {
  env: {
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/dom',
    'plugin:import/recommended',
    'plugin:import/typescript',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    '@remix-run/eslint-config/jest-testing-library',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint', 'jest-dom', 'testing-library'],
  root: true,
  settings: {
    typescript: true,
    node: true
  },
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc'
        },
        groups: [
          'type',
          'builtin',
          'external',
          'internal',
          'parent',
          ['sibling', 'index']
        ],
        'newlines-between': 'always',
        pathGroups: [],
        pathGroupsExcludedImportTypes: []
      }
    ],
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn'
  }
}
