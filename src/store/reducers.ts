/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import get from 'lodash/get';
import { combineReducers } from 'redux';
import { tripReducer } from './tripPlanner/tripPlanner';
import { State } from './types';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */

export default function createReducer() {
  return combineReducers<State>({
    tripPlanner: tripReducer,
  });
}
