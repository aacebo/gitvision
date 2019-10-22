import { createAction, props } from '@ngrx/store';

import { IPackage } from '../models';

export const find = createAction(
  '[PACKAGE] Find',
  props<{ readonly name: string }>(),
);

export const findSuccess = createAction(
  '[PACKAGE] FindSuccess',
  props<{ readonly res: IPackage }>(),
);

export const findFailed = createAction(
  '[PACKAGE] FindFailed',
  props<{ readonly error: Error }>(),
);
