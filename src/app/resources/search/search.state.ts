import { combineReducers, Action } from '@ngrx/store';

import { ISearch, ISearchQuery } from './models';
import * as fromReducers from './reducers';

export interface ISearchState {
  readonly query?: ISearchQuery;
  readonly results?: ISearch;
}

export function reducers(state: ISearchState, action: Action) {
  return combineReducers<ISearchState>({
    query: fromReducers.queryReducer,
    results: fromReducers.resultsReducer,
  })(state, action);
}
