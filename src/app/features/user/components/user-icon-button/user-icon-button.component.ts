import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import * as qs from 'qs';
import { UniPopoverDirective } from 'uniform';

import { environment } from '../../../../../environments/environment';
import { IUser } from '../../../../resources/user';

import { USER_ACTIONS } from '../../constants';
import { UserAction } from '../../enums';
import { IUserAction } from '../../models';

@Component({
  selector: 'app-user-icon-button',
  templateUrl: './user-icon-button.component.html',
  styleUrls: ['./user-icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserIconButtonComponent {
  @Input() auth?: IUser;
  @Output() action = new EventEmitter<{ action: UserAction, user: IUser }>();
  @ViewChild(UniPopoverDirective, { static: false }) popover: UniPopoverDirective;

  readonly USER_ACTIONS = USER_ACTIONS;

  login() {
    const query = qs.stringify({
      client_id: environment.api.clientId,
    });

    window.location.href = `${environment.api.auth}/login/oauth/authorize?${query}`;
  }

  onAction(action: IUserAction) {
    this.popover.hide();
    this.action.emit({ action: action.action, user: this.auth });
  }
}
