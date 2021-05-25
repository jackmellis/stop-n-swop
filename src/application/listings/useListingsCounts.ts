import { QueryOptions, useQuery } from '@respite/query';
import { ListingCountKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { Game } from '@sns/contracts/product';
import type { FetchProductsListingCount } from 'core/listings';

export const useListingsCounts = encase(
  (fetch: FetchProductsListingCount) => (games: Game[], opts?: QueryOptions) => {
    return useQuery(
      ListingCountKey,
      () => {
        const products = games.flatMap((game) => {
          return game.platforms.map((platform) => {
            return {
              productId: game.id,
              platformId: platform.id,
            };
          });
        });
        return fetch(products);
      },
      [games],
      {
        ttl: 30000,
        ...opts,
      },
    );
  },
);

export type ListingsCounts = ReturnType<typeof useListingsCounts>['data'];
