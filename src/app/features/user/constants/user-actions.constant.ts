import { IUserAction } from '../models';
import { UserAction } from '../enums';

export const USER_ACTIONS: IUserAction[] = [
  { icon: 'fa-external-link-alt', text: 'View', action: UserAction.View },
  { icon: 'fa-sign-out-alt', text: 'Sign Out', action: UserAction.Signout },
];
