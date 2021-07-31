import { QueryOptions, useQuery } from '@respite/query';
import { ListingKey } from 'application/keys';
import { encase } from 'react-jpex';
import { SHORT_TTL } from 'domain/constants';
import type { FetchListing } from 'core/listings';

export const useListing = encase(
  (fetchListing: FetchListing) =>
    ({ id }: { id: string }, opts?: QueryOptions) => {
      return useQuery(ListingKey, () => fetchListing({ id }), [id], {
        ttl: SHORT_TTL,
        ...opts,
      });
    },
);
