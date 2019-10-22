export interface IPackageSource {
  readonly coverage: number;
  readonly files: {
    readonly hasChangelog: boolean;
    readonly readmeSize: number;
    readonly testsSize: number;
  };
  readonly linters: string[];
}
