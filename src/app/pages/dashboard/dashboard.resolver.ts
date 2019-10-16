import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService } from '../../resources/auth';

@Injectable()
export class DashboardResolver implements Resolve<any> {
  constructor(private readonly _auth: AuthService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const code = route.queryParamMap.get('code');
    this._auth.findToken(code);
  }
}
