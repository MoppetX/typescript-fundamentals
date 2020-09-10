'use strict';

module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  jsxBracketSameLine: true,
  trailingComma: 'es5',
  printWidth: 80,

  overrides: [
    {
      files: '.prettierrc.js',
      options: {
        trailingComma: 'all',
      },
    },
  ],
};
