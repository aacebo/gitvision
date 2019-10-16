import { createAction, props } from '@ngrx/store';

export const findToken = createAction(
  '[AUTH] FindToken',
  props<{ readonly code: string }>(),
);

export const findTokenSuccess = createAction(
  '[AUTH] FindTokenSuccess',
  props<{ readonly token: string }>(),
);

export const findTokenFailed = createAction(
  '[AUTH] FindTokenFailed',
  props<{ readonly error: Error }>(),
);


