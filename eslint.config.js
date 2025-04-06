import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import reactHooks from 'eslint-plugin-react-hooks';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  {
    files: [ '**/*.{js,mjs,cjs,ts,jsx,tsx}' ],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        '__IS_DEV__': true,
        '__API__': true,
        ...globals.browser,
        ...globals.jest
      }
    },
    plugins: { 'react-hooks': reactHooks },
    rules: {
      quotes: [ 2, 'single' ],
      semi: [ 2, 'always' ],
      indent: [ 'error', 2 ],
      'object-curly-spacing': [ 'error', 'always' ],
      'react/jsx-indent': [ 2, 2 ],
      'react/jsx-indent-props': [ 2, 2 ],
      'no-unused-vars': [ 'off' ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/ban-ts-comment': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [ 2, { 'extensions': [ '.js', '.jsx', '.ts', '.tsx' ] } ],
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'import/extentions': 'off',
      'i18next/no-literal-string': [ 'error', {
        markupOnly: true,
        ignoreAttribute: [ 'data-testid' ]
      } ],
      'max-len': [ 'error', { 'ignoreComments': true, code: 100 } ],
      'jsx-a11y/no-static-element-interaction': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'no-undef': 'off'
    }
  },
	
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  i18next.configs['flat/recommended']
  // reactHooks.configs['recommended-latest']
];
