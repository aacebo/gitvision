import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { IPackage } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class PackageHttpService {

  constructor(private readonly _http: HttpClient) { }

  find(name: string) {
    return this._http.get<IPackage>(`${environment.api.npm}/package/${name}`);
  }
}
