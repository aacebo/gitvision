import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LastPublishedPipe } from './last-published.pipe';

@NgModule({
  declarations: [LastPublishedPipe],
  exports: [LastPublishedPipe],
  imports: [CommonModule],
})
export class LastPublishedModule { }
