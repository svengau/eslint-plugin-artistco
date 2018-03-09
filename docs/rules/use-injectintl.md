# Prevent missing injectIntl id react-intl is imported (artistco/use-injectintl)

Warn users if injectIntl is missing react-intl is imported

## Rule Details

The following patterns are considered warnings:

```jsx
import React from 'react';
import { FormattedMessage } from 'react-intl';
const MyComponent = props => <FormattedMessage defaultMessage="Hello" id="hello" />;
export default MyComponent;
```

The following patterns are **not** considered warnings:

```jsx
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
const MyComponent = props => <FormattedMessage defaultMessage="Hello" id="hello" />;
export default injectIntl(MyComponent);
```
