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
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'ignore',
        },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'no-console': 0,
    'sort/object-properties': 0,
    'sort-imports': [
      'warn',
      {
        allowSeparatedGroups: true,
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none'],
      },
    ],
    'sort-keys-fix/sort-keys-fix': [1, 'asc', {
      natural: true,
    }],
  },
};
