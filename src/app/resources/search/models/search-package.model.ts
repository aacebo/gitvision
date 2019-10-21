export interface ISearchPackage {
  readonly author: {
    readonly name: string;
    readonly email: string;
  };
  readonly date: Date;
  readonly description: string;
  readonly keywords: string[];
  readonly links: {
    readonly bugs: string;
    readonly homepage: string;
    readonly npm: string;
    readonly repository: string;
  };
  readonly maintainers: {
    readonly username: string;
    readonly email: string;
  }[];
  readonly name: string;
  readonly publisher: {
    readonly username: string;
    readonly email: string;
  };
  readonly scope: string;
  readonly version: string;
}
