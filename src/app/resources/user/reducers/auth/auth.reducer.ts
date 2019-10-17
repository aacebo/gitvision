import { createReducer, on } from '@ngrx/store';

import { removeToken } from '../../../auth/actions/remove-token.actions';
import { IUser } from '../../models';
import * as actions from '../../actions/find-auth.actions';

export const authReducer = createReducer<IUser | undefined>(
  undefined,
  on(actions.findAuth, (_) => undefined),
  on(actions.findAuthFailed, (_) => undefined),
  on(actions.findAuthSuccess, (_, action) => action.user),
  on(removeToken, (_) => undefined),
);
