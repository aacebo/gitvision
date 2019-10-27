import { Component, ChangeDetectionStrategy, Input, ContentChild, Output, EventEmitter } from '@angular/core';

import { UniTabLabelComponent } from '../tab-label/tab-label.component';

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
  get active() { return this._active; }
  set active(v: boolean) {
    this._active = v;

    if (v) {
      this.selected.emit();
    }
  }

  @Output() selected = new EventEmitter<void>();
  @ContentChild(UniTabLabelComponent, { static: true }) uniLabel?: UniTabLabelComponent;

  private _active = false;
}
