import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';

export const textReducer = createReducer<string | undefined>(
  undefined,
  on(actions.clear, (_) => undefined),
  on(actions.search, (_, action) => action.text),
);
