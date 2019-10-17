import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';

export const tokenReducer = createReducer<string | undefined>(
  undefined,
  on(actions.findToken, (_) => undefined),
  on(actions.findTokenFailed, (_) => undefined),
  on(actions.findTokenSuccess, (_, action) => action.token),
  on(actions.removeToken, (_) => undefined),
);

