module.exports = {
  extends: [
    'airbnb-typescript-prettier',
    'plugin:jest/recommended',
    'plugin:jsx-control-statements/recommended',
  ],
  plugins: ['jest', 'jsx-control-statements'],
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'import/prefer-default-export': 'off',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    camelcase: 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
  },
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      env: {
        jest: true,
        browser: true,
        es6: true,
      },
    },
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      extensions: ['.ts', '.tsx', '.js'],
    },
  },
};