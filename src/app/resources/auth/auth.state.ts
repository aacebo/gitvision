import { combineReducers, Action } from '@ngrx/store';

import * as fromReducers from './reducers';

export interface IAuthState {
  readonly token?: string;
}

export function reducers(state: IAuthState, action: Action) {
  return combineReducers<IAuthState>({
    token: fromReducers.tokenReducer,
  })(state, action);
}
