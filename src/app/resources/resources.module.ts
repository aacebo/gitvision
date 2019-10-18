import { NgModule } from '@angular/core';

import { AuthModule } from './auth';
import { UserModule } from './user';
import { SearchModule } from './search';

@NgModule({
  imports: [
    AuthModule,
    UserModule,
    SearchModule,
  ],
})
export class ResourcesModule { }
