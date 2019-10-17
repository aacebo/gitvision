import { UserAction } from '../enums';

export interface IUserAction {
  readonly icon?: string;
  readonly text: string;
  readonly action: UserAction;
}
