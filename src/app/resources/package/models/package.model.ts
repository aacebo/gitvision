import { IPackageGithub } from './package-github.model';
import { IPackageMetadata } from './package-metadata.model';
import { IPackageNpm } from './package-npm.model';
import { IPackageSource } from './package-source.model';

export interface IPackage {
  readonly analyzedAt: Date;
  readonly collected: {
    readonly github: IPackageGithub;
    readonly metadata: IPackageMetadata;
    readonly npm: IPackageNpm;
    readonly source: IPackageSource;
  };
  readonly evaluation: {
    readonly maintenance: {
      readonly commitsFrequency: number;
      readonly issuesDistribution: number;
      readonly openIssues: number;
      readonly releasesFrequency: number;
    };
    readonly popularity: {
      readonly communityInterest: number;
      readonly dependentsCount: number;
      readonly downloadsAcceleration: number;
      readonly downloadsCount: number;
    };
    readonly quality: {
      readonly branding: number;
      readonly carefulness: number;
      readonly health: number;
      readonly tests: number;
    };
  };
  readonly score: {
    readonly detail: {
      readonly maintenance: number;
      readonly popularity: number;
      readonly quality: number;
    };
    readonly final: number;
  };
}
