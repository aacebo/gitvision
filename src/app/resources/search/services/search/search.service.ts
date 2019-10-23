import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ISearchState } from '../../search.state';
import { ISearchQuery, ISearch } from '../../models';
import * as selectors from '../../search.selectors';
import * as actions from '../../actions';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  readonly state$: Observable<ISearchState>;
  readonly query$: Observable<ISearchQuery>;
  readonly results$: Observable<ISearch>;
  readonly loading$: Observable<boolean>;

  constructor(private readonly _store$: Store<ISearchState>) {
    this.state$ = this._store$.pipe(select(selectors.selectState));
    this.query$ = this._store$.pipe(select(selectors.selectQuery));
    this.results$ = this._store$.pipe(select(selectors.selectResults));
    this.loading$ = this._store$.pipe(select(selectors.selectLoading));
  }

  search(query: ISearchQuery) {
    this._store$.dispatch(actions.search({ query }));
  }
}
