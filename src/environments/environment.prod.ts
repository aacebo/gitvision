import { IEnvironment } from './environment.interface';

export const environment: IEnvironment = {
  production: true,
  api: {
    base: 'https://api.github.com',
    auth: 'https://github.com',
    clientId: 'f5eec8c2a110c13725b3',
    secret: '09857ebf410068e7af5980944a36f139bdc00c23',
  },
};
