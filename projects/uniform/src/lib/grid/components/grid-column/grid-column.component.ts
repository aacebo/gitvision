import { Component, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uni-grid-column',
  exportAs: 'uniGridColumn',
  templateUrl: './grid-column.component.html',
  styleUrls: ['./grid-column.component.scss'],
  host: { class: 'uni-grid-column' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniGridColumnComponent {
  constructor(readonly el: ElementRef<HTMLElement>) { }
}
