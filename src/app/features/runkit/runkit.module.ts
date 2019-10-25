import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunkitComponent } from './runkit.component';

@NgModule({
  declarations: [RunkitComponent],
  exports: [RunkitComponent],
  imports: [CommonModule],
})
export class RunkitModule { }
