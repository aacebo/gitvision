import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IUserState } from '../../user.state';
import { IUser } from '../../models';
import * as selectors from '../../user.selectors';
import * as actions from '../../actions';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly state$: Observable<IUserState>;
  readonly auth$: Observable<IUser>;

  constructor(private readonly _store$: Store<IUserState>) {
    this.state$ = this._store$.pipe(select(selectors.selectState));
    this.auth$ = this._store$.pipe(select(selectors.selectAuth));
  }

  findAuth() {
    this._store$.dispatch(actions.findAuth());
  }
}
