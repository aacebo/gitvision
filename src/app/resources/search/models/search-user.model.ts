import { ISearchItem } from './search-item.model';

export interface ISearchUser extends ISearchItem {
  readonly login: string;
  readonly avatar_url: string;
  readonly gravatar_id: string;
  readonly followers_url: string;
  readonly subscriptions_url: string;
  readonly organizations_url: string;
  readonly repos_url: string;
  readonly received_events_url: string;
  readonly type: string;
}
