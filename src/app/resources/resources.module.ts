import { NgModule } from '@angular/core';

import { SearchModule } from './search';
import { PackageModule } from './package';

@NgModule({
  imports: [
    SearchModule,
    PackageModule,
  ],
})
export class ResourcesModule { }
