import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, startWith, debounceTime, tap } from 'rxjs/operators';

import { ISearchQuery } from '../../../../resources/search';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent implements OnInit, OnDestroy {
  @Input() query?: ISearchQuery;
  @Input() size: number;

  @Output() changed = new EventEmitter<ISearchQuery>();
  @Output() search = new EventEmitter<ISearchQuery>();

  readonly control = new FormControl();

  private readonly _destroy = new Subject<void>();

  ngOnInit() {
    if (this.query) {
      this.control.setValue(this.query.q);
    }

    this.control.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      tap(v => {
        if (v) {
          this.changed.emit({
            q: v,
            size: this.size,
          });
        }
      }),
      takeUntil(this._destroy),
    ).subscribe();
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }

  onEnter() {
    this.search.emit({
      q: this.control.value,
      size: 20,
    });
  }
}
