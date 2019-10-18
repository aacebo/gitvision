import { createReducer, on } from '@ngrx/store';

import { SearchType } from '../../enums';
import { ISearch, ISearchRepository } from '../../models';
import * as actions from '../../actions';

export const repositoryReducer = createReducer<ISearch<ISearchRepository> | undefined>(
  undefined,
  on(actions.clear, (_) => undefined),
  on(actions.searchSuccess, (_, action) => {
    if (action.searchType === SearchType.Repository) {
      return action.results;
    }

    return _;
  }),
);
