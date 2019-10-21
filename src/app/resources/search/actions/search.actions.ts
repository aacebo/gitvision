import { createAction, props } from '@ngrx/store';

import { ISearch, ISearchQuery } from '../models';

export const search = createAction(
  '[SEARCH] Search',
  props<{ readonly query: ISearchQuery }>(),
);

export const searchSuccess = createAction(
  '[SEARCH] SearchSuccess',
  props<{ readonly res: ISearch }>(),
);

export const searchFailed = createAction(
  '[SEARCH] SearchFailed',
  props<{ readonly error: Error }>(),
);
