import { LanguageProvider } from 'gca-react-components/src/redux-modules/languageProvider';
import { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';
import { ActionsObservable } from 'redux-observable';
import { Observable } from 'rxjs/Observable';

import { Action as FsaAction } from 'typescript-fsa';

import { Dependencies } from './store';

import { TripPlanner } from './tripPlanner/tripPlanner';

export interface State {
  tripPlanner: TripPlanner;
}

export type Action = FsaAction<any>;

export type Store = ReduxStore<State>;

export type Dispatch = ReduxDispatch<Action>;
export type Epic = (action$: ActionsObservable<Action>, store: Store, options: Dependencies) => Observable<Action>;
