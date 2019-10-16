import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as qs from 'qs';

import { environment } from '../../../../../environments/environment';
import { IAccessTokenResponse } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class AuthHttpService {

  constructor(private readonly _http: HttpClient) { }

  accessToken(code: string) {
    const query = qs.stringify({
      client_id: environment.api.clientId,
      client_secret: environment.api.secret,
      code,
    });

    return this._http.post<IAccessTokenResponse>(
      `${environment.api.auth}/login/oauth/access_token?${query}`,
      undefined,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
  }
}
