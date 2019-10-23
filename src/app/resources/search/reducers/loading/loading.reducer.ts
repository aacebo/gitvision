import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';

export const loadingReducer = createReducer<boolean>(
  false,
  on(actions.search, (_) => true),
  on(actions.searchFailed, (_) => false),
  on(actions.searchSuccess, (_) => false),
);
