import { QueryOptions, useQuery } from '@respite/query';
import { ListingRequirementsKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { FetchListingRequirements } from 'core/listings';

export const useRequirements = encase(
  (fetch: FetchListingRequirements) =>
    (
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
