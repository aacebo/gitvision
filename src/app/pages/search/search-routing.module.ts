import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';
import { SearchResolver } from './search.resolver';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    resolve: { query: SearchResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [SearchResolver],
})
export class SearchRoutingModule { }
