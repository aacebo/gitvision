import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './package.state';
import * as effects from './effects';

@NgModule({
  imports: [
    StoreModule.forFeature('package', reducers),
    EffectsModule.forFeature([
      effects.FindEffects,
    ]),
  ],
})
export class PackageModule { }
