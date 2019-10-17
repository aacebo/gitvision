import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IUserState } from './user.state';

export const selectState = createFeatureSelector<IUserState>('user');
export const selectAuth = createSelector(selectState, state => state.auth);
