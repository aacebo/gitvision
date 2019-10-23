import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UniFormFieldModule, UniInputModule, UniIconModule } from 'uniform';

import * as components from './components';
import * as pipes from './pipes';

const declarations = [
  components.SearchInputComponent,
  components.SearchResultComponent,
  pipes.SearchLastUpdatedPipe,
  pipes.SearchScorePipe,
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
  ],
})
export class SearchModule { }
