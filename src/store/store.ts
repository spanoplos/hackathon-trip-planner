/**
 * Create the store with asynchronously loaded reducers
 */

import { applyMiddleware, compose, createStore, GenericStoreEnhancer } from 'redux';
import { createEpicMiddleware, Epic } from 'redux-observable';

import { routerMiddleware } from 'react-router-redux';
import * as api from './api';
import createReducer from './reducers';
import rootEpic from './rootEpic';
import { Action, State } from './types';

export interface Dependencies {
  api: typeof api;
}

const dependencies: Dependencies = {
  api,
};

const devtools: any = (window as any).devToolsExtension || (() => (noop: any) => noop);

export default function configureStore(initialState: any, history: any) {
  const epicMiddleware = createEpicMiddleware(rootEpic, { dependencies });
  const middlewares = [epicMiddleware, routerMiddleware(history)];
  const enhancers = compose(applyMiddleware(...middlewares), devtools());
  const store = createStore<State>(createReducer(), initialState, enhancers as any);

  /* istanbul ignore next */
  if ((module as any).hot) {
    (module as any).hot.accept('./reducers', () => {
      store.replaceReducer(createReducer());
    });

    (module as any).hot.accept('./rootEpic', () => {
      epicMiddleware.replaceEpic(rootEpic);
    });
  }

  return store;
}
