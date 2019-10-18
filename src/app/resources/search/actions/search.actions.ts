import { createAction, props } from '@ngrx/store';

import { SearchType } from '../enums';
import { ISearch } from '../models';

export const search = createAction(
  '[SEARCH] Search',
  props<{ readonly text: string; readonly searchTypes: SearchType[] }>(),
);

export const searchSuccess = createAction(
  '[SEARCH] SearchSuccess',
  props<{ readonly results: ISearch; readonly searchType: SearchType }>(),
);

export const searchFailed = createAction(
  '[SEARCH] SearchFailed',
  props<{ readonly error: Error }>(),
);

