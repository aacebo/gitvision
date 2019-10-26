import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UniTabComponent,
  UniTabGroupComponent,
  UniTabLabelComponent,
} from './components';

const declarations = [
  UniTabComponent,
  UniTabGroupComponent,
  UniTabLabelComponent,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule],
})
export class UniTabModule { }
