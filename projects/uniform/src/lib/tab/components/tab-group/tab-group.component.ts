import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { UniTabComponent } from '../tab';
import { UniColor } from '../../../core/enums';

@Component({
  moduleId: module.id,
  selector: 'uni-tab-group',
  exportAs: 'uniTabGroup',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  host: {
    class: 'uni-tab-group',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniTabGroupComponent implements AfterContentInit {
  @Input() active = 0;
  @Input() color = UniColor.Secondary;

  @Output() selected = new EventEmitter<number>();

  @ContentChildren(UniTabComponent)
  readonly tabs: QueryList<UniTabComponent>;

  ngAfterContentInit() {
    setTimeout(() => this._setActive(), 100);
  }

  select(i: number) {
    this.active = i;
    this._setActive();
    this.selected.emit(i);
  }

  private _setActive() {
    const tabs = this.tabs.toArray();

    for (let i = 0; i < tabs.length; i++) {
      if (i === +this.active) {
        tabs[i].active = true;
      } else {
        tabs[i].active = false;
      }
    }
  }
}
