import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { SearchService } from '../../resources/search';

@Injectable()
export class SearchResolver implements Resolve<any> {
  constructor(private readonly _search: SearchService) { }

  resolve(route: ActivatedRouteSnapshot) {
    if (route.queryParams && route.queryParamMap.has('q')) {
      this._search.search({
        // ...route.queryParams as any,
        q: route.queryParamMap.get('q'),
        size: +route.queryParamMap.get('size'),
      });
    }
  }
}
