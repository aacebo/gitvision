import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniToolbarModule, UniTabModule, UniCardModule } from 'uniform';

import { PackageComponent } from './package.component';
import { PackageRoutingModule } from './package-routing.module';

import { RunkitModule } from '../../features/runkit';
import { MarkdownModule } from '../../features/markdown';

@NgModule({
  declarations: [PackageComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,

    UniToolbarModule,
    UniTabModule,
    UniCardModule,

    PackageRoutingModule,

    RunkitModule,
    MarkdownModule,
  ],
})
export class PackageModule { }
