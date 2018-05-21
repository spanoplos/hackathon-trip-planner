/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { shallow } from 'enzyme';
import messages from '../../src/translations/json/en-us';

export function shallowWithIntl(node: React.ReactElement<any>) {
  // Create the IntlProvider to retrieve context for wrapping around.
  const intlProvider = new IntlProvider({ locale: 'en-us', messages }, {});
  const { intl } = intlProvider.getChildContext();

  return shallow(React.cloneElement(node, { intl }));
}
