import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as qs from 'qs';

import { environment } from '../../../../../environments/environment';
import { ISearchQuery, ISearch } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class SearchHttpService {

  constructor(private readonly _http: HttpClient) { }

  search(query: ISearchQuery) {
    const q = qs.stringify(query);
    return this._http.get<ISearch>(`${environment.api.npm}/search?${q}`);
  }
}
