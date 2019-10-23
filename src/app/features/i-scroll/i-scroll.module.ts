import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IScrollDirective } from './i-scroll.directive';

@NgModule({
  declarations: [IScrollDirective],
  exports: [IScrollDirective],
  imports: [CommonModule],
})
export class IScrollModule { }
