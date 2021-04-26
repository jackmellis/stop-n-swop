import jpex from 'jpex';
import type { Config } from 'ports/io';

jpex.factory<Config>(() => ({
  oauth: {
    google: {
      url: import.meta.env.VITE_OAUTH_GOOGLE_URL,
      clientId: import.meta.env.VITE_OAUTH_GOOGLE_CLIENT_ID,
      scope: import.meta.env.VITE_OAUTH_GOOGLE_SCOPE,
    },
  },
}));
