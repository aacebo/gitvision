import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ISearchState } from './search.state';

export const selectState = createFeatureSelector<ISearchState>('search');
export const selectQuery = createSelector(selectState, state => state.query);
export const selectResults = createSelector(selectState, state => state.results);
export const selectLoading = createSelector(selectState, state => state.loading);
