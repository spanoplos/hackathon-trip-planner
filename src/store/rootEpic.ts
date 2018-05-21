import { combineEpics } from 'redux-observable';

import { fetchTripEpic } from './tripPlanner/tripPlanner';

const rootEpic = combineEpics(
  fetchTripEpic as any,
);

export default rootEpic;
