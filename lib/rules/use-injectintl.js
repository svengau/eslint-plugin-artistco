

const docsUrl = require('../util/docsUrl');
const {
  flow, get, intersection, map,
} = require('lodash/fp');

module.exports = {
  meta: {
    docs: {
      description: 'Prevent missing injectIntl id react-intl is imported',
      category: 'Possible Errors',
      recommended: true,
      url: docsUrl('use-injectintl'),
    },
    // fixable: 'code',
  },
  create(context) {
    return {
      ImportDeclaration: function handleImports(node) {
        if (node.specifiers.length) {
          // Ignoring unassigned imports
          const name = node.source.value;
          if (name === 'react-intl') {
            const importedClasses = flow(
              get('specifiers'),
              map(get('imported.name')),
            )(node);

            if (!importedClasses.includes('injectIntl') && intersection(['FormattedMessage'], importedClasses)) {
              context.report({
                node,
                message: 'injectIntl must be used',
                /* fix(fixer) {
                  return null;
                }, */
              });
            }
          }
        }
      },
    };
  },
};
