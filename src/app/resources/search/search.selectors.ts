import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ISearchState } from './search.state';
import { SearchType } from './enums';

export const selectState = createFeatureSelector<ISearchState>('search');
export const selectText = createSelector(selectState, state => state.text);
export const selectUser = createSelector(selectState, state => state.user);
export const selectRepository = createSelector(selectState, state => state.repository);

export const selectTotal = createSelector(selectState, state => {
  const user = state.user ? state.user.total_count : 0;
  const repository = state.repository ? state.repository.total_count : 0;
  return user + repository;
});

export const selectResults = createSelector(selectState, state => {
  const user = state.user ? state.user.items.map(v => ({
    value: v,
    type: SearchType.User,
  })) : [];

  const repository = state.repository ? state.repository.items.map(v => ({
    value: v,
    type: SearchType.Repository,
  })) : [];

  return [...user, ...repository].sort((a, b) => a.value.score - b.value.score)
                                 .slice(0, 8);
});
