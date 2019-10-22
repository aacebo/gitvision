import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PackageComponent } from './package.component';
import { PackageResolver } from './package.resolver';

const routes: Routes = [
  {
    path: ':package',
    component: PackageComponent,
    resolve: { query: PackageResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PackageResolver],
})
export class PackageRoutingModule { }
