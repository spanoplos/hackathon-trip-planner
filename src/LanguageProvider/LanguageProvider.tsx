/*
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import { selectors } from 'gca-react-components/src/redux-modules/languageProvider';
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { State } from '../store/types';

export interface MessageMap {
  [index: string]: string;
}

interface SP {
  locale: string;
}

interface OP {
  messages: MessageMap;
}

type Props = SP & OP;

class LanguageProvider extends React.Component<Props> {
  public render() {
    const { children, locale, messages } = this.props;

    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        {React.Children.only(children)}
      </IntlProvider>
    );
  }
}

// Pull out the pieces of state we care about
const mapState = (state: State) => ({
  locale: selectors.locale(state),
});

export default connect<SP, {}, OP>(mapState)(LanguageProvider);
