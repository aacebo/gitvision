import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { SearchHttpService } from '../../services';
import * as actions from '../../actions';

@Injectable()
export class SearchEffects {
  readonly search$ = createEffect(() => this._actions$.pipe(
    ofType(actions.search),
    switchMap(a =>
      this._searchHttp.search(a.query).pipe(
        map(res => actions.searchSuccess({ res })),
        catchError(err => of(actions.searchFailed({ error: err }))),
      ),
    ),
  ));

  constructor(
    private readonly _actions$: Actions,
    private readonly _searchHttp: SearchHttpService,
  ) { }
}
