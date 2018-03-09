const rule = require('../../../lib/rules/use-injectintl');
const { RuleTester } = require('eslint');

require('babel-eslint');

const parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
    jsx: true,
  },
};

const ruleTester = new RuleTester({ parserOptions });
ruleTester.run('use-injectintl', rule, {
  valid: [{
    // Should support both `is` and `has` prefixes by default
    code: `
      import React from 'react';
      import { FormattedMessage, injectIntl } from 'react-intl';
      const MyComponent = props => <FormattedMessage defaultMessage="Hello" id="hello" />;
      export default injectIntl(MyComponent);
    `,
  }],
  invalid: [{
    // createReactClass components with PropTypes
    code: `
      import React from 'react';
      import { FormattedMessage } from 'react-intl';
      const MyComponent = props => <FormattedMessage defaultMessage="Hello" id="hello" />;
      export default MyComponent;
    `,
    errors: [{
      message: 'injectIntl must be used',
    }],
  }],
});
