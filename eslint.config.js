// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const stylistic = require("@stylistic/eslint-plugin");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic
    ],
    plugins: {
      "@stylistic": stylistic
    },
    rules: {
      // missing typescript or disabling of overly restrictive rules
      '@typescript-eslint/array-type': 'warn',
      '@typescript-eslint/explicit-member-accessibility': ['warn', { 'accessibility': 'no-public' }],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',

      // default code style (similar style used in ng generate files)
      '@stylistic/array-bracket-spacing': ['warn', 'always', { 'singleValue': false }],
      '@stylistic/comma-spacing': ["warn", { "before": false, "after": true }],
      '@stylistic/comma-style': ["warn", "last"],
      '@stylistic/dot-location': ["warn", "property"],
      '@stylistic/indent': ['warn', 2],
      '@stylistic/indent-binary-ops': ['warn', 2],
      '@stylistic/no-mixed-spaces-and-tabs': 'warn',
      '@stylistic/no-tabs': 'warn',
      '@stylistic/no-multi-spaces': 'warn',
      '@stylistic/no-extra-semi': 'warn',
      '@stylistic/no-trailing-spaces': ['warn', { 'ignoreComments': true }],
      '@stylistic/no-whitespace-before-property': 'warn',
      '@stylistic/object-curly-spacing': ['warn', 'always'],
      '@stylistic/quote-props': ["warn", "consistent"],
      '@stylistic/quotes': ['warn', 'single'],
      '@stylistic/semi': ['warn', 'always'],
      '@stylistic/semi-spacing': 'warn',
      '@stylistic/space-infix-ops': 'warn',
      '@stylistic/space-unary-ops': 'warn',
      '@stylistic/type-generic-spacing': 'warn',
      '@stylistic/type-named-tuple-spacing': 'warn',
    },
  }
);
