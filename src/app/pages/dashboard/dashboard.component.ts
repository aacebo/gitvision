import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as qs from 'qs';

import { SearchService, ISearchQuery } from '../../resources/search';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  constructor(
    readonly search: SearchService,
    private readonly _location: Location,
    private readonly _router: Router,
  ) { }

  onChanged(e: ISearchQuery) {
    this.search.search(e);
    this._location.replaceState(`/?${qs.stringify(e)}`);
  }

  onSearch(e: ISearchQuery) {
    this._router.navigateByUrl(`/search?${qs.stringify(e)}`);
  }
}
