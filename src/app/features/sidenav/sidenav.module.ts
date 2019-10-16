import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UniSidenavModule, UniButtonModule, UniIconModule, UniTooltipModule } from 'uniform';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    RouterModule,

    UniSidenavModule,
    UniButtonModule,
    UniIconModule,
    UniTooltipModule,
  ],
})
export class SidenavModule { }
