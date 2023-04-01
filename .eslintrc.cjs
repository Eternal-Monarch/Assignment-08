module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'no-unused-vars': 1,
    'no-console': 0,
    'react/destructuring-assignment': 0,
    'react/prop-types': 0,
    'object-curly-newline': 0,
    'arrow-parens': 0,
    'linebreak-style': 0,
    'max-len': 0,
    'arrow-body-style': 0,
    'react/function-component-definition': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'no-multiple-empty-lines': 0,
    'import/prefer-default-export': 0,
    'operator-assignment': 0,
    'prefer-const': 0,
    'jsx-a11y/control-has-associated-label': 0,
    camelcase: 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'no-param-reassign': 0,
  },
};
