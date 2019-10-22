export interface IPackageNpm {
  readonly dependentsCount: number;
  readonly downloads: {
    readonly count: number;
    readonly from: Date;
    readonly to: Date;
  }[];
  readonly starsCount: number;
}
