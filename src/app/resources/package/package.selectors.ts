import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IPackageState } from './package.state';

export const selectState = createFeatureSelector<IPackageState>('package');
export const selectPackage = createSelector(selectState, state => state.package);
