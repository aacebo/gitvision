import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UniFormFieldModule, UniInputModule, UniIconModule } from 'uniform';

import * as components from './components';

const declarations = [
  components.SearchComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    UniFormFieldModule,
    UniInputModule,
    UniIconModule,
  ],
})
export class SearchModule { }
