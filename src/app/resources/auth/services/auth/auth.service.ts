import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAuthState } from '../../auth.state';
import * as selectors from '../../auth.selectors';
import * as actions from '../../actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly state$: Observable<IAuthState>;
  readonly token$: Observable<string>;

  constructor(private readonly _store$: Store<IAuthState>) {
    this.state$ = this._store$.pipe(select(selectors.selectState));
    this.token$ = this._store$.pipe(select(selectors.selectToken));
  }

  findToken(code: string) {
    this._store$.dispatch(actions.findToken({ code }));
  }

  removeToken() {
    this._store$.dispatch(actions.removeToken());
  }
}
