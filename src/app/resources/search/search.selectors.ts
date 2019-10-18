import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ISearchState } from './search.state';

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
  const user = state.user ? state.user.items : [];
  const repository = state.repository ? state.repository.items : [];
  return [...user, ...repository].sort((a, b) => a.score - b.score);
});
