import '../commonRxjs';

import { Observable } from 'rxjs/Observable';

import { combineEpics } from 'redux-observable';
import { createSelector } from 'reselect';
import { Action, actionCreatorFactory, Success } from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Epic, State, Store } from '../types';

export interface Trip {
  location: {
    type: string,
    coordinates: [number, number],
  },
  category: {
      id: number,
      category: string,
      specific: string,
      categoryImage: string,
      heroImage: string,
  },
  id: number,
  name: string,
  categoryId: number,
  radius: number,
  score: any,
  locationAsGeoJson: string,
}

export interface TripPlanner {
  error: boolean,
  loading: boolean,
  trips: Trip[] | null,
}

export const initialState: TripPlanner = {
  error: false,
  loading: false,
  trips: null,
};

// --------------------------------- //
// Actions
// --------------------------------- //

const actionCreator = actionCreatorFactory('TRIP_PLANNER');

export const fetchTrip = actionCreator.async<{}, { trip: string }>('FETCH_TRIP');

// --------------------------------- //
// Reducers
// --------------------------------- //

export const tripReducer = reducerWithInitialState({initialState})
  .case(fetchTrip.started, state => ({ ...state, loading: true, error: false }))
  .case(fetchTrip.done, (state, { result }) => ({
    ...state,
    error: false,
    loading: false,
    trip: result.trip,
  }))
  .case(fetchTrip.failed, state => ({ ...state, loading: false, error: true }));

// --------------------------------- //
// Selectors
// --------------------------------- //
const baseSelector = (state: State): Trip[] | null => state.tripPlanner.trips;

export const getHotels = createSelector(
  baseSelector,
  (trips: Trip[]): Trip[] | null => trips ? trips
                              .filter((trip: Trip) =>
                                trip.category.category === 'Hotel / Lodging') : null,
);

export const getPoi = createSelector(
  baseSelector,
  (trips: Trip[]): Trip[] => trips
                              .filter((trip: Trip) =>
                                trip.category.category === 'University / Institution' ||
                                trip.category.category === 'Outdoor recreation' ||
                                trip.category.category === 'Popular area / Landmark',
                            ),
);

// --------------------------------- //
// Epics
// --------------------------------- //

export const fetchTripEpic: Epic = (action$, store, { api }) =>
  action$.ofType(fetchTrip.started.type).switchMap(() => {
    return api
      .fetchTrip()
      .map((response: any) =>
        fetchTrip.done({
          params: {},
          result: { trip: response },
        }),
      )
      .catch(() => [fetchTrip.failed({ params: {}, error: {} })]);
  });
