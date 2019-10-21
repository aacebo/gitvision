import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, startWith, debounceTime, tap } from 'rxjs/operators';

import { ISearchQuery } from '../../../../resources/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() query?: ISearchQuery;
  @Output() changed = new EventEmitter<ISearchQuery>();

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
            size: 5,
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
}
