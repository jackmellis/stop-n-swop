import { QueryOptions, useQuery } from '@respite/query';
import { ListingRequirementsKey } from 'application/keys';
import type { FetchListingRequirements } from 'core/listings';
import { encase } from 'react-jpex';

export const useRequirements = encase(
  (fetch: FetchListingRequirements) => (
    { productId, platformId }: { productId: string; platformId: string },
    opts?: QueryOptions,
  ) => {
    return useQuery(
      ListingRequirementsKey,
      () => {
        return fetch({ platformId, productId });
      },
      [productId, platformId],
      opts,
    );
  },
);
