import { Input, TemplateRef, AfterViewInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UniPosition } from './position.enum';

export class UniPositionBase implements AfterViewInit {
  @Input() content: string | TemplateRef<any>;
  @Input() position: UniPosition;

  @ViewChild('default', { static: false }) default: TemplateRef<any>;

  readonly template$ = new BehaviorSubject<TemplateRef<any>>(undefined);

  private get _isString() {
    return typeof this.content === 'string';
  }

  ngAfterViewInit() {
    this.template$.next(this._isString ? this.default : this.content as TemplateRef<any>);
  }
}
