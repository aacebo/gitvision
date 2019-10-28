import { Component, ChangeDetectionStrategy, Input, ContentChild, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UniTabLabelComponent } from '../tab-label';

@Component({
  moduleId: module.id,
  selector: 'uni-tab',
  exportAs: 'uniTab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  host: {
    class: 'uni-tab',
    '[class.active]': 'active',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniTabComponent {
  @Input() label?: string;

  @Input()
  get active() { return this.active$.value; }
  set active(v: boolean) {
    this.active$.next(v);

    if (v) {
      this.selected.emit();
    }
  }

  @Output() selected = new EventEmitter<void>();
  @ContentChild(UniTabLabelComponent, { static: true })
  readonly uniLabel?: UniTabLabelComponent;

  readonly active$ = new BehaviorSubject(false);
}
