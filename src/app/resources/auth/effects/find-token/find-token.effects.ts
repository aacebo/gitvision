import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import * as actions from '../../actions/find-token.actions';
import { AuthHttpService } from '../../services';

@Injectable()
export class FindTokenEffects {
  readonly findToken$ = createEffect(() => this._actions$.pipe(
    ofType(actions.findToken),
    switchMap(a => {
      const token = localStorage.getItem(environment.api.key);

      if (token && !a.code) {
        return of(actions.findTokenSuccess({ token }));
      }

      return this._authHttp.accessToken(a.code).pipe(
        map(res => actions.findTokenSuccess({ token: res.access_token })),
        catchError(err => of(actions.findTokenFailed({ error: new Error(err) }))),
      );
    }),
  ));

  readonly findTokenSuccess$ = createEffect(() => this._actions$.pipe(
    ofType(actions.findTokenSuccess),
    tap(a => {
      if (a.token) {
        localStorage.setItem(environment.api.key, a.token);
      }
    }),
  ), { dispatch: false });

  constructor(
    private readonly _actions$: Actions,
    private readonly _authHttp: AuthHttpService,
  ) { }
}
