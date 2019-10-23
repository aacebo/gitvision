import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import * as qs from 'qs';

import { SearchService, ISearchQuery } from '../../resources/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  constructor(
    readonly search: SearchService,
    private readonly _location: Location,
  ) { }

  onChanged(e: ISearchQuery) {
    this.search.search(e);
    this._location.replaceState(`/?${qs.stringify(e)}`);
  }

  onIScroll(e: ISearchQuery) {
    this.search.search(e);
    this._location.replaceState(`/?${qs.stringify(e)}`);
  }
}
