import { Component, ChangeDetectionStrategy } from '@angular/core';
import * as qs from 'qs';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-user-icon-button',
  templateUrl: './user-icon-button.component.html',
  styleUrls: ['./user-icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserIconButtonComponent {
  login() {
    const query = qs.stringify({
      client_id: environment.api.clientId,
    });

    window.location.href = `${environment.api.auth}/login/oauth/authorize?${query}`;
  }
}
