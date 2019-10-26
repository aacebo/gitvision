import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniCardAvatarDirective } from './directives';
import {
  UniCardComponent,
  UniCardContentComponent,
  UniCardFooterComponent,
  UniCardHeaderComponent,
  UniCardSubtitleComponent,
  UniCardTitleComponent,
} from './components';

const declarations = [
  UniCardComponent,
  UniCardFooterComponent,
  UniCardHeaderComponent,
  UniCardSubtitleComponent,
  UniCardTitleComponent,
  UniCardContentComponent,
  UniCardAvatarDirective,
];

@NgModule({
  declarations,
  exports: declarations,
  imports: [CommonModule],
})
export class UniCardModule {}
