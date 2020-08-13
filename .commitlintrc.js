module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'chore',
        'test',
        'ci',
      ],
    ],
    'subject-case': [0, 'never'],
  },
}
