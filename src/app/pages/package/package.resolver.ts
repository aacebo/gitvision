import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { PackageService } from '../../resources/package';

@Injectable()
export class PackageResolver implements Resolve<any> {
  constructor(private readonly _package: PackageService) { }

  resolve(route: ActivatedRouteSnapshot) {
    if (route.params && route.paramMap.has('package')) {
      this._package.find(route.paramMap.get('package'));
    }
  }
}
