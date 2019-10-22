import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { PackageHttpService } from '../../services';
import * as actions from '../../actions';

@Injectable()
export class FindEffects {
  readonly find$ = createEffect(() => this._actions$.pipe(
    ofType(actions.find),
    switchMap(a =>
      this._packageHttp.find(a.name).pipe(
        map(res => actions.findSuccess({ res })),
        catchError(err => of(actions.findFailed({ error: err }))),
      ),
    ),
  ));

  constructor(
    private readonly _actions$: Actions,
    private readonly _packageHttp: PackageHttpService,
  ) { }
}
