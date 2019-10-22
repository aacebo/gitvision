export interface IPackageGithub {
  readonly commits: {
    readonly count: number;
    readonly from: Date;
    readonly to: Date;
  }[];
  readonly contributors: {
    readonly commitsCount: number;
    readonly username: string;
  }[];
  readonly forksCount: number;
  readonly homepage: string;
  readonly issues: {
    readonly count: number;
    readonly distribution: any;
    readonly isDisabled: boolean;
    readonly openCount: number;
  };
  readonly starsCount: number;
  readonly statuses: {
    readonly context: string;
    readonly state: string;
  }[];
  readonly subscribersCount: number;
}
