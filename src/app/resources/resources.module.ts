import { NgModule } from '@angular/core';

import { AuthModule } from './auth';
import { UserModule } from './user';

@NgModule({
  imports: [
    AuthModule,
    UserModule,
  ],
})
export class ResourcesModule { }
