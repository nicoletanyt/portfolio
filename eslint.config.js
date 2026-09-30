import js from '@eslint/js'
import globals from 'globals'
import svelte from 'eslint-plugin-svelte'
import tsParser from '@typescript-eslint/parser'

export default [
  { ignores: ['dist', 'build', '.svelte-kit'] },
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    files: ['**/*.svelte'],
    languageOptions: { parserOptions: { parser: tsParser } },
  },
  {
    files: ['**/*.{js,svelte}'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
]
