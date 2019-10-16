import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniButtonModule, UniIconModule, UniPopoverModule } from 'uniform';

import { UserIconButtonComponent } from './components';

@NgModule({
  declarations: [UserIconButtonComponent],
  exports: [UserIconButtonComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,

    UniButtonModule,
    UniIconModule,
    UniPopoverModule,
  ],
})
export class UserModule { }
