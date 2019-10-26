import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { UniDialogCloseDirective } from './directives';
import { UniDialogService } from './dialog.service';
import {
  UniDialogContainerComponent,
  UniDialogContentComponent,
  UniDialogFooterComponent,
  UniDialogHeaderComponent,
  UniDialogTitleComponent,
} from './components';

const declarations = [
  UniDialogContainerComponent,
  UniDialogContentComponent,
  UniDialogFooterComponent,
  UniDialogHeaderComponent,
  UniDialogTitleComponent,
  UniDialogCloseDirective,
];

@NgModule({
  declarations,
  exports: declarations,
  entryComponents: [UniDialogContainerComponent],
  imports: [CommonModule, OverlayModule],
  providers: [UniDialogService],
})
export class UniDialogModule { }
