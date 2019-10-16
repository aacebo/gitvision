import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniButtonModule, UniIconModule, UniPopoverModule } from 'uniform';

import * as components from './components';

const declarations = [
  components.UserIconButtonComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,

    UniButtonModule,
    UniIconModule,
    UniPopoverModule,
  ],
})
export class UserModule { }
