import { QueryOptions, useQuery } from '@respite/query';
import { encase } from 'react-jpex';
import { PlatformsKey } from 'application/keys';
import type { FetchPlatforms } from 'core/platforms';

export const usePlatforms = encase(
  (fetch: FetchPlatforms) => (opts?: QueryOptions) => {
    return useQuery(
      PlatformsKey,
      () => {
        return fetch();
      },
      [],
      opts,
    );
  },
);
