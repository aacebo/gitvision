import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { SearchService } from '../../resources/search';

@Injectable()
export class DashboardResolver implements Resolve<any> {
  constructor(private readonly _search: SearchService) { }

  resolve(route: ActivatedRouteSnapshot) {
    if (route.queryParams && route.queryParamMap.has('q')) {
      this._search.search({
        q: route.queryParamMap.get('q'),
        size: 5,
      });
    }
  }
}
