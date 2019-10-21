export interface IEnvironment {
  readonly production: boolean;
  readonly api: {
    readonly npm: string;
  };
}
