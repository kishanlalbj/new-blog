module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0 }],
    'jsx-quotes': ['error', 'prefer-single']
  },
};