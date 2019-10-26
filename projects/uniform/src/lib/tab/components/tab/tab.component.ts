import { Component, ChangeDetectionStrategy, Input, ContentChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UniTabLabelComponent } from '../tab-label/tab-label.component';

@Component({
  moduleId: module.id,
  selector: 'uni-tab',
  exportAs: 'uniTab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  host: {
    class: 'uni-tab',
    '[class.active]': 'active$.value',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UniTabComponent implements AfterViewInit {
  @Input() label?: string;

  @ContentChild(UniTabLabelComponent, { static: true }) uniLabel?: UniTabLabelComponent;

  readonly active$ = new BehaviorSubject(false);

  constructor(private readonly _cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this._cdr.markForCheck();
  }
}
