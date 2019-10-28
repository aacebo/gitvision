import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniIconModule, UniToastModule } from 'uniform';

import { FieldComponent } from './field.component';

@NgModule({
  declarations: [FieldComponent],
  exports: [FieldComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [CommonModule, UniIconModule, UniToastModule],
})
export class FieldModule { }
