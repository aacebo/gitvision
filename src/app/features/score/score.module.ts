import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniIconModule, UniPopoverModule, UniProgressModule } from 'uniform';

import * as components from './components';
import * as pipes from './pipes';

const declarations = [
  components.ScoreIconComponent,
  pipes.ScorePipe,
];

@NgModule({
  declarations,
  exports: declarations,
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    UniIconModule,
    UniPopoverModule,
    UniProgressModule,
  ],
})
export class ScoreModule { }
