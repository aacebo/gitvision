import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniPillComponent } from './pill.component';

@NgModule({
  declarations: [UniPillComponent],
  exports: [UniPillComponent],
  imports: [CommonModule],
})
export class UniPillModule { }
