import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';
import * as actions from '../../actions/remove-token.actions';

@Injectable()
export class RemoveTokenEffects {
  readonly removeToken$ = createEffect(() => this._actions$.pipe(
    ofType(actions.removeToken),
    tap(() => {
      localStorage.removeItem(environment.api.key);
    }),
  ), { dispatch: false });

  constructor(private readonly _actions$: Actions) { }
}
