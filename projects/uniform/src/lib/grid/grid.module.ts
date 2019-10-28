import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniGridColumnComponent, UniGridRowComponent } from './components';
import { UniGridComponent } from './grid.component';

@NgModule({
  declarations: [UniGridRowComponent, UniGridColumnComponent, UniGridComponent],
  exports: [UniGridRowComponent, UniGridColumnComponent, UniGridComponent],
  imports: [CommonModule],
})
export class UniGridModule { }
