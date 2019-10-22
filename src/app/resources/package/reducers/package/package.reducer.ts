import { createReducer, on } from '@ngrx/store';

import { IPackage } from '../../models';
import * as actions from '../../actions';

export const packageReducer = createReducer<IPackage | undefined>(
  undefined,
  on(actions.find, (_) => undefined),
  on(actions.findFailed, (_) => undefined),
  on(actions.findSuccess, (_, a) => a.res),
);
