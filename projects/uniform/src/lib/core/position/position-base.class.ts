import { Input, TemplateRef, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UniPosition } from './position.enum';

export class UniPositionBase implements OnInit {
  @Input() content: string | TemplateRef<any>;
  @Input() position: UniPosition;

  readonly template$ = new BehaviorSubject<TemplateRef<any>>(undefined);

  get isString() {
    return typeof this.content === 'string';
  }

  ngOnInit() {
    this.template$.next(this.isString ? undefined : this.content as TemplateRef<any>);
  }
}
