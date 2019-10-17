import { combineReducers, Action } from '@ngrx/store';

import { IUser } from './models';
import * as fromReducers from './reducers';

export interface IUserState {
  readonly auth?: IUser;
}

export function reducers(state: IUserState, action: Action) {
  return combineReducers<IUserState>({
    auth: fromReducers.authReducer,
  })(state, action);
}
