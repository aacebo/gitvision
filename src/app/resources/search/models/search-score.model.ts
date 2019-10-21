export interface ISearchScore {
  readonly detail: {
    readonly maintenance: number;
    readonly popularity: number;
    readonly quality: number;
  };
  readonly final: number;
}
