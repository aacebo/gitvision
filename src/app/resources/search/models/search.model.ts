import { ISearchResult } from './search-result.model';

export interface ISearch {
  readonly results: ISearchResult[];
  readonly total: number;
}
