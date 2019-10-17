import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { findTokenSuccess } from '../../../auth/actions';
import * as actions from '../../actions/find-auth.actions';
import { UserHttpService } from '../../services';

@Injectable()
export class FindAuthEffects {
  readonly findAuth$ = createEffect(() => this._actions$.pipe(
    ofType(actions.findAuth),
    switchMap(() =>
      this._userHttp.findAuth().pipe(
        map(res => actions.findAuthSuccess({ user: res })),
        catchError(err => of(actions.findAuthFailed({ error: new Error(err) }))),
      ),
    ),
  ));

  readonly findTokenSuccess$ = createEffect(() => this._actions$.pipe(
    ofType(findTokenSuccess),
    map(a => a.token ? actions.findAuth() : actions.findAuthSuccess({ user: undefined })),
  ));

  constructor(
    private readonly _actions$: Actions,
    private readonly _userHttp: UserHttpService,
  ) { }
}
