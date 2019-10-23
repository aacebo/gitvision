import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniToolbarModule } from 'uniform';

import { SearchModule as SearchFeatureModule } from '../../features/search';
import { IScrollModule } from '../../features/i-scroll';

import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [SearchComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    UniToolbarModule,
    IScrollModule,
    SearchFeatureModule,
    SearchRoutingModule,
  ],
})
export class SearchModule { }
