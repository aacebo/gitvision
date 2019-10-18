import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  UniDialogModule,
  UniFormFieldModule,
  UniInputModule,
  UniIconModule,
} from 'uniform';

import * as components from './components';

const declarations = [
  components.SearchInputComponent,
  components.SearchDialogComponent,
  components.SearchItemCardComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [components.SearchDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    UniDialogModule,
    UniFormFieldModule,
    UniInputModule,
    UniIconModule,
  ],
})
export class SearchModule { }
