import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, startWith, debounceTime, tap } from 'rxjs/operators';

import { SearchService } from '../../../../resources/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit, OnDestroy {
  readonly control = new FormControl();

  private readonly _destroy = new Subject<void>();

  constructor(private readonly search: SearchService) { }

  ngOnInit() {
    this.control.valueChanges.pipe(
      startWith(''),
      debounceTime(500),
      tap(v => {
        if (v) {
          this.search.search({
            q: v,
            size: 10,
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
