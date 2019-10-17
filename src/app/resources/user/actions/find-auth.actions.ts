import { createAction, props } from '@ngrx/store';

import { IUser } from '../models';

export const findAuth = createAction(
  '[USER] FindAuth',
);

export const findAuthSuccess = createAction(
  '[USER] FindAuthSuccess',
  props<{ readonly user: IUser }>(),
);

export const findAuthFailed = createAction(
  '[USER] FindAuthFailed',
  props<{ readonly error: Error }>(),
);

