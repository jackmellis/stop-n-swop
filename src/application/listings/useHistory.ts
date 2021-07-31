import { QueryOptions, useQuery } from '@respite/query';
import { HistoryKey } from 'application/keys';
import { encase } from 'react-jpex';
import { STANDARD_TTL } from 'domain/constants';
import type { FetchHistory } from 'core/listings';

export const useHistory = encase(
  (fetch: FetchHistory) =>
    ({ listingId }: { listingId: string }, opts?: QueryOptions) => {
      return useQuery(HistoryKey, () => fetch({ listingId }), [listingId], {
        ttl: STANDARD_TTL,
        ...opts,
      });
    },
);
