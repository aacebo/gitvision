import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as qs from 'qs';

import { environment } from '../../../../../environments/environment';
import { SearchType } from '../../enums';
import { ISearch } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class SearchHttpService {
  private readonly _endpoints = {
    [SearchType.User]: 'users',
    [SearchType.Repository]: 'repositories',
  };

  constructor(private readonly _http: HttpClient) { }

  search(text: string, type: SearchType) {
    const query = qs.stringify({
      q: text,
    });

    return this._http.get<ISearch>(`${environment.api.base}/search/${this._endpoints[type]}?${query}`);
  }
}
