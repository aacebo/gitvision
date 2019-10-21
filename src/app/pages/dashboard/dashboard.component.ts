import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
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
  ) { }

  onSearch(e: ISearchQuery) {
    this.search.search(e);
    this._location.replaceState(`/?${qs.stringify(e)}`);
  }
}
