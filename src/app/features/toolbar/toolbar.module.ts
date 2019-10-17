import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniToolbarModule } from 'uniform';

import { UserModule } from '../user';
import { SearchModule } from '../search';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    UniToolbarModule,

    UserModule,
    SearchModule,
  ],
})
export class ToolbarModule { }
