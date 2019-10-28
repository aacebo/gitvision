import { Component, ChangeDetectionStrategy, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { UniGridRowComponent } from './components';

@Component({
  moduleId: module.id,
  selector: 'uni-grid',
  exportAs: 'uniGrid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  host: { class: 'uni-grid' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniGridComponent implements AfterContentInit {
  @ContentChildren(UniGridRowComponent) readonly rows: QueryList<UniGridRowComponent>;

  ngAfterContentInit() {
    for (const row of this.rows.toArray()) {
      row.el.nativeElement.style.height = `${100 / this.rows.length}%`;
    }
  }
}
