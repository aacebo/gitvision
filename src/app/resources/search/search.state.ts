import { combineReducers, Action } from '@ngrx/store';

import { ISearch, ISearchUser, ISearchRepository } from './models';
import * as fromReducers from './reducers';

export interface ISearchState {
  readonly text?: string;
  readonly user?: ISearch<ISearchUser>;
  readonly repository?: ISearch<ISearchRepository>;
}

export function reducers(state: ISearchState, action: Action) {
  return combineReducers<ISearchState>({
    text: fromReducers.textReducer,
    user: fromReducers.userReducer,
    repository: fromReducers.repositoryReducer,
  })(state, action);
}
