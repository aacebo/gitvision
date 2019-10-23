import { Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';

import { ISearchQuery } from '../../resources/search';

@Directive({
  selector: '[appIScroll]',
})
export class IScrollDirective {
  @Input('appIScrollSize') size: number;
  @Input('appIScrollCount') count: number;
  @Input('appIScrollTotal') total: number;
  @Input('appIScrollQuery') query: string;

  @Output('appIScroll') scroll = new EventEmitter<ISearchQuery>();

  private _prev = this._element.scrollTop;

  private get _element() {
    return document.scrollingElement;
  }

  private get _isBottom() {
    return this._element.scrollHeight - this._element.scrollTop === this._element.clientHeight;
  }

  @HostListener('wheel')
  onScroll() {
    if (this._isBottom && this._element.scrollTop !== this._prev) {
      if (this.count < this.total) {
        this.scroll.emit({
          q: this.query,
          size: this.count + this.size,
        });
      }
    }

    this._prev = this._element.scrollTop;
  }
}
