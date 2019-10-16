export interface IEnvironment {
  readonly production: boolean;
  readonly api: {
    readonly base: string;
    readonly auth: string;
    readonly clientId: string;
    readonly secret: string;
  };
}
