import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';
import { IUser } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {

  constructor(private readonly _http: HttpClient) { }

  findAuth() {
    return this._http.get<IUser>(`${environment.api.base}/user`);
  }
}
