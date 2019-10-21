import { createReducer, on } from '@ngrx/store';

import { ISearchQuery } from '../../models';
import * as actions from '../../actions';

export const queryReducer = createReducer<ISearchQuery | undefined>(
  undefined,
  on(actions.search, (_, a) => a.query),
);
