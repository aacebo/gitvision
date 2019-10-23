import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniProgressModule } from 'uniform';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { SearchModule } from '../../features/search';

@NgModule({
  declarations: [DashboardComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    UniProgressModule,
    DashboardRoutingModule,
    SearchModule,
  ],
})
export class DashboardModule { }
