module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh'],
  rules: {
    indent: ["error", 2],
    quotes: [2, "single", { "avoidEscape": true }],
    // react
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "react/react-in-jsx-scope": 'off',
    "jsx-quotes": ["error", "prefer-single"],
    // typescript
    "@typescript-eslint/explicit-function-return-type": 'off',
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/method-signature-style": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
  },
}
