import { IScore } from '../../models';
import { ISearchPackage } from './search-package.model';

export interface ISearchResult {
  readonly package: ISearchPackage;
  readonly score: IScore;
  readonly searchScore: number;
}
