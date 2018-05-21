/**
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import 'babel-polyfill';

// Import all the third party stuff
import createBrowserHistory from 'history/createBrowserHistory';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import 'sanitize.css/sanitize.css';

import App from './App/App';
import LanguageProvider, { MessageMap } from './LanguageProvider/LanguageProvider';
import configureStore from './store/store';
import { translationMessages } from './translations/i18n';

const rid = window.location.pathname.split('/')[3];
const history = createBrowserHistory({
  basename: `/trip-planner`,
});
const initialState = {};
const store = configureStore(initialState, history);

const render = (translatedMessages: MessageMap) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <Router history={history}>
          <App />
        </Router>
      </LanguageProvider>
    </Provider>,
    document.getElementById('app'),
  );
};

// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('translations/i18n', () => {
     render(translationMessages);
  });

  module.hot.accept('./App/App', () => {
    render(translationMessages);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
     render(translationMessages);
  }, 0);
});
