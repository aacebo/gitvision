import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of, forkJoin } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

import * as actions from '../../actions/search.actions';
import { SearchHttpService } from '../../services';
import { SearchType } from '../../enums';

@Injectable()
export class SearchEffects {
  readonly search$ = createEffect(() => this._actions$.pipe(
    ofType(actions.search),
    switchMap(a => {
      const userIndex = a.searchTypes.indexOf(SearchType.User);
      const searches = a.searchTypes.map(t => this._searchHttp.search(a.text, t));

      return forkJoin(searches).pipe(
        switchMap(res => {
          const success = res.map((r, i) => actions.searchSuccess({
            results: r,
            searchType: i === userIndex ? SearchType.User : SearchType.Repository,
          }));

          return success;
        }),
        catchError(err => of(actions.searchFailed({ error: new Error(err) }))),
      );
    }),
  ));

  constructor(
    private readonly _actions$: Actions,
    private readonly _searchHttp: SearchHttpService,
  ) { }
}
