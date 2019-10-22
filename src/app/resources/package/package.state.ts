import { combineReducers, Action } from '@ngrx/store';

import { IPackage } from './models';
import * as fromReducers from './reducers';

export interface IPackageState {
  readonly package?: IPackage;
}

export function reducers(state: IPackageState, action: Action) {
  return combineReducers<IPackageState>({
    package: fromReducers.packageReducer,
  })(state, action);
}
