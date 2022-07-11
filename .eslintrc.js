module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:sort/recommended',
  ],
  plugins: ['simple-import-sort', 'sort-keys-fix', 'sort'],
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
    'no-console': 0,
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'ignore',
          caseInsensitive: true,
        },
      },
    ],
    'sort/object-properties': 0,
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
        allowSeparatedGroups: true,
      },
    ],
    'sort-keys-fix/sort-keys-fix': [1, 'asc', {
      natural: true,
    }],
  },
};
