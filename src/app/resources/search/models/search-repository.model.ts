import { ISearchItem } from './search-item.model';

export interface ISearchRepository extends ISearchItem {
  readonly name: string;
  readonly full_name: string;
  readonly owner: {
    readonly login: string;
    readonly id: number;
    readonly node_id: string;
    readonly avatar_url: string;
    readonly gravatar_id: string;
    readonly url: string;
    readonly received_events_url: string;
    readonly type: string;
  };
  readonly private: boolean;
  readonly description: string;
  readonly fork: boolean;
  readonly created_at: Date;
  readonly updated_at: Date;
  readonly pushed_at: Date;
  readonly homepage: string;
  readonly size: number;
  readonly stargazers_count: number;
  readonly watchers_count: number;
  readonly language: string;
  readonly forks_count: number;
  readonly open_issues_count: number;
  readonly master_branch: string;
  readonly default_branch: string;
}
