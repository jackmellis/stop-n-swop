import { encase } from 'react-jpex';
import { QueryOptions, useQuery } from '@respite/query';
import { ListingOrdersKey } from 'application/keys';
import { SHORT_TTL } from 'domain/constants';
import type { FetchListingOrders } from 'core/orders';

export const useListingOrders = encase(
  (fetch: FetchListingOrders) =>
    ({ listingId }: { listingId: string }, opts?: QueryOptions) => {
      return useQuery(
        ListingOrdersKey,
        () => fetch({ listingId }),
        [listingId],
        {
          ttl: SHORT_TTL,
          ...opts,
        },
      );
    },
);
