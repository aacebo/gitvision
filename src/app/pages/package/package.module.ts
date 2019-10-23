import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniToolbarModule, UniTabModule } from 'uniform';

import { PackageComponent } from './package.component';
import { PackageRoutingModule } from './package-routing.module';

@NgModule({
  declarations: [PackageComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    UniToolbarModule,
    UniTabModule,
    PackageRoutingModule,
  ],
})
export class PackageModule { }
