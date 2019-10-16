import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAuthState } from './auth.state';

export const selectState = createFeatureSelector<IAuthState>('auth');
export const selectToken = createSelector(selectState, state => state.token);
