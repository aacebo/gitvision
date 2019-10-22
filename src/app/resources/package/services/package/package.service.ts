import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IPackageState } from '../../package.state';
import { IPackage } from '../../models';
import * as selectors from '../../package.selectors';
import * as actions from '../../actions';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  readonly state$: Observable<IPackageState>;
  readonly package$: Observable<IPackage>;

  constructor(private readonly _store$: Store<IPackageState>) {
    this.state$ = this._store$.pipe(select(selectors.selectState));
    this.package$ = this._store$.pipe(select(selectors.selectPackage));
  }

  find(name: string) {
    this._store$.dispatch(actions.find({ name }));
  }
}
