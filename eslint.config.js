const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');
const simpleImportSort = require('eslint-plugin-simple-import-sort');

module.exports = [
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettier,
    {
        languageOptions: {
            parser: tseslint.parser,
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            prettier: prettierPlugin,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'prettier/prettier': 'error',
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    }
];
