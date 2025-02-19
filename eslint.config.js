import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        '__IS_DEV__': true,
        ...globals.browser,
        ...globals.jest
      },
    },
    rules: {
      quotes: [2, 'single'],
      semi: [2, 'always'],
      indent: ['error', 2],
      'react/jsx-indent': [2, 2],
      'react/jsx-indent-props': [2, 2],
      'no-unused-vars': ['off'],
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'import/extentions': 'off',
      'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid'] }],
      'max-len': ['error', { 'ignoreComments': true, code: 100 }]
    },
  },
  
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  i18next.configs['flat/recommended'],
];
