import { createReducer, on } from '@ngrx/store';

import { ISearch } from '../../models';
import * as actions from '../../actions';

export const resultsReducer = createReducer<ISearch | undefined>(
  undefined,
  on(actions.searchFailed, (_) => undefined),
  on(actions.searchSuccess, (_, a) => a.res),
);

