import { ISearchPackage } from './search-package.model';
import { ISearchScore } from './search-score.model';

export interface ISearchResult {
  readonly package: ISearchPackage;
  readonly score: ISearchScore;
  readonly searchScore: number;
}
