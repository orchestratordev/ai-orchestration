import { clientEnv, serverEnv } from '@/lib/env';

export const appConfig = {
  name: clientEnv.APP_NAME,

  version: '1.0.0',

  environment: serverEnv.NODE_ENV,
};
