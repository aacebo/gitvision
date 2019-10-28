import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UniFormFieldModule, UniInputModule, UniIconModule } from 'uniform';

import { LastPublishedModule } from '../last-published';
import { ScoreModule } from '../score';
import * as components from './components';

const declarations = [
  components.SearchInputComponent,
  components.SearchResultComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,

    UniFormFieldModule,
    UniInputModule,
    UniIconModule,

    LastPublishedModule,
    ScoreModule,
  ],
})
export class SearchModule { }
