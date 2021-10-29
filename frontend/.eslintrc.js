module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 0,
    'indent': 'off',
    'prefer-destructuring': ["error", {"object": false, "array": false}],
    "object-shorthand": 0,
    "no-unused-vars": 0,
    "no-template-curly-in-string": 0
  },
};
