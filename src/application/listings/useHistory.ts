import { QueryOptions, useQuery } from '@respite/query';
import { ListingHistoryKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { FetchHistory } from 'core/listings';

export const useHistory = encase(
  (fetch: FetchHistory) =>
    ({ listingId }: { listingId: string }, opts?: QueryOptions) => {
      return useQuery(
        ListingHistoryKey,
        () => fetch({ listingId }),
        [listingId],
        {
          ttl: 30000,
          ...opts,
        },
      );
    },
);
