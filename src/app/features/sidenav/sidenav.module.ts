import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniSidenavModule, UniButtonModule, UniIconModule, UniTooltipModule } from 'uniform';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    UniSidenavModule,
    UniButtonModule,
    UniIconModule,
    UniTooltipModule,
  ],
})
export class SidenavModule { }
