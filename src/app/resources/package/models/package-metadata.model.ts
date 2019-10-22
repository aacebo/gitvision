export interface IPackageMetadata {
  readonly date: Date;
  readonly dependencies: any;
  readonly description: string;
  readonly hasSelectiveFiles: boolean;
  readonly keywords: string[];
  readonly license: string;
  readonly links: {
    readonly bugs: string;
    readonly homepage: string;
    readonly npm: string;
    readonly repository: string;
  };
  readonly maintainers: {
    readonly email: string;
    readonly username: string;
  }[];
  readonly name: string;
  readonly publisher: {
    readonly email: string;
    readonly username: string;
  };
  readonly releases: {
    readonly count: number;
    readonly from: Date;
    readonly to: Date;
  }[];
  readonly repository: {
    readonly directory: string;
    readonly type: string;
    readonly url: string;
  };
  readonly scope: string;
  readonly version: string;
}
