import { Component, ChangeDetectionStrategy, ContentChildren, QueryList, ElementRef, AfterContentInit } from '@angular/core';

import { UniGridColumnComponent } from '../grid-column';

@Component({
  moduleId: module.id,
  selector: 'uni-grid-row',
  exportAs: 'uniGridRow',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss'],
  host: { class: 'uni-grid-row' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniGridRowComponent implements AfterContentInit {
  @ContentChildren(UniGridRowComponent) readonly rows: QueryList<UniGridRowComponent>;
  @ContentChildren(UniGridColumnComponent) readonly columns: QueryList<UniGridColumnComponent>;

  constructor(readonly el: ElementRef<HTMLElement>) { }

  ngAfterContentInit() {
    for (const row of this.rows.toArray()) {
      row.el.nativeElement.style.height = `${100 / this.rows.length}%`;
    }

    for (const column of this.columns.toArray()) {
      column.el.nativeElement.style.maxWidth = `${100 / this.columns.length}%`;
      column.el.nativeElement.style.flexBasis = `${100 / this.columns.length}%`;
    }
  }
}
