import { QueryOptions, useQuery } from '@respite/query';
import { encase } from 'react-jpex';
import { GamesCountsKey } from 'application/keys';
import { SHORT_TTL } from 'domain/constants';
import type { FetchCounts } from 'core/games';
import type { PromiseType } from 'crosscutting/utils';

type Args = Parameters<FetchCounts>[0];
type Result = PromiseType<ReturnType<FetchCounts>>;

export const useCounts = encase(
  (fetchCounts: FetchCounts) =>
    (
      {
        platforms,
        search,
        available,
        favourites,
        developers,
        publishers,
      }: Args,
      opts?: QueryOptions,
    ) => {
      return useQuery<Result>(
        GamesCountsKey,
        async () => {
          const result = await fetchCounts({
            platforms,
            search,
            available,
            favourites,
            developers,
            publishers,
          });
          return result;
        },
        [
          search,
          platforms.join(','),
          available,
          favourites,
          developers.join(','),
          publishers.join(','),
        ],
        {
          ...opts,
          ttl: available || favourites ? SHORT_TTL : undefined,
        },
      );
    },
);
