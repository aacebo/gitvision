import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ISearchState } from '../../search.state';
import { SearchType } from '../../enums';
import { ISearch, ISearchUser, ISearchRepository } from '../../models';
import * as selectors from '../../search.selectors';
import * as actions from '../../actions';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  readonly state$: Observable<ISearchState>;
  readonly text$: Observable<string | undefined>;
  readonly user$: Observable<ISearch<ISearchUser> | undefined>;
  readonly repository$: Observable<ISearch<ISearchRepository> | undefined>;
  readonly total$: Observable<number>;
  readonly results$: Observable<{ value: (ISearchUser | ISearchRepository); type: SearchType }[]>;

  constructor(private readonly _store$: Store<ISearchState>) {
    this.state$ = this._store$.pipe(select(selectors.selectState));
    this.text$ = this._store$.pipe(select(selectors.selectText));
    this.user$ = this._store$.pipe(select(selectors.selectUser));
    this.repository$ = this._store$.pipe(select(selectors.selectRepository));
    this.total$ = this._store$.pipe(select(selectors.selectTotal));
    this.results$ = this._store$.pipe(select(selectors.selectResults));
  }

  search(text: string, searchTypes: SearchType[]) {
    this._store$.dispatch(actions.search({ text, searchTypes }));
  }

  clear() {
    this._store$.dispatch(actions.clear());
  }
}
