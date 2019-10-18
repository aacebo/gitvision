import { createReducer, on } from '@ngrx/store';

import { SearchType } from '../../enums';
import { ISearch, ISearchUser } from '../../models';
import * as actions from '../../actions';

export const userReducer = createReducer<ISearch<ISearchUser> | undefined>(
  undefined,
  on(actions.clear, (_) => undefined),
  on(actions.searchSuccess, (_, action) => {
    if (action.searchType === SearchType.User) {
      return action.results;
    }

    return _;
  }),
);
