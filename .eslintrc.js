/* eslint-env node */

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    '@0x1461a0/eslint-config/basic',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        '@0x1461a0/eslint-config/react-ts',
      ],
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
      },
    },
  ],
  ignorePatterns: [
    'lib',
  ],
}