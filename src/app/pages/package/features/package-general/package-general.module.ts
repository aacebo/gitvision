import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniCardModule, UniGridModule } from 'uniform';

import { PackageGeneralComponent } from './package-general.component';

import { FieldModule } from '../../../../features/field';

@NgModule({
  declarations: [PackageGeneralComponent],
  exports: [PackageGeneralComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,

    UniCardModule,
    UniGridModule,

    FieldModule,
  ],
})
export class PackageGeneralModule { }
