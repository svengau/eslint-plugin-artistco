

const allRules = {
  'use-injectintl': require('./lib/rules/use-injectintl'),
};

module.exports = {
  rules: allRules,
  configs: {
    recommended: {
      plugins: [
        'react-intl',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
      },
    },
    all: {
      plugins: [
        'react-intl',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: [
        {
          'react-intl/use-injectintl': 2,
        },
      ],
    },
  },
};
