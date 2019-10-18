export interface ISearch<T = any> {
  readonly total_count: number;
  readonly incomplete_results: boolean;
  readonly items: T[];
}
