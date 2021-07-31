import { QueryOptions, useQuery } from '@respite/query';
import { ListingKey, MyListingsKey } from 'application/keys';
import { encase } from 'react-jpex';
import { useCache } from '@respite/core';
import { STANDARD_TTL } from 'domain/constants';
import type { FetchMyListings } from 'core/listings';

export const useMyListings = encase(
  (fetchMyListings: FetchMyListings) => (opts?: QueryOptions) => {
    const cache = useCache();

    return useQuery(
      MyListingsKey,
      async () => {
        const listings = await fetchMyListings();
        listings.forEach((listing) => {
          cache.success([ListingKey, listing.id], listing);
        });
        return listings;
      },
      [],
      {
        ttl: STANDARD_TTL,
        ...opts,
      },
    );
  },
);
