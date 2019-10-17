import { Component, ChangeDetectionStrategy } from '@angular/core';

import { UserService, IUser } from '../../resources/user';
import { AuthService } from '../../resources/auth';

import { UserAction } from '../user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  constructor(
    readonly user: UserService,
    private readonly _auth: AuthService,
  ) { }

  onUserAction(e: { action: UserAction, user: IUser }) {
    if (e.action === UserAction.Signout) {
      this._auth.removeToken();
    } else if (e.action === UserAction.View) {
      window.open(e.user.html_url, '_blank');
    }
  }
}
