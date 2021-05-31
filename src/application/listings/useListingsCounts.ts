import { ListingCountKey } from 'application/keys';
import { encase } from 'react-jpex';
import { useGames, useInfiniteQuery } from 'application/games';
import type { InternalQuery } from '@respite/core';
import type { QueryOptions } from '@respite/query';
import type { Game } from '@sns/contracts/product';
import type { FetchProductsListingCount } from 'core/listings';
import type { PromiseType } from 'crosscutting/utils';

type Result = PromiseType<ReturnType<FetchProductsListingCount>>;

const getProducts = (games: Game[], page: number) => {
  const start = page * 20;
  const end = page * 20 + 20;

  return games.slice(start, end).flatMap((game) => {
    return game.platforms.map((platform) => {
      return {
        productId: game.id,
        platformId: platform.id,
      };
    });
  });
};

export const useListingsCounts = encase(
  (fetch: FetchProductsListingCount) =>
    (gamesQuery: ReturnType<typeof useGames>, opts?: QueryOptions) => {
      // TODO: clean al of this up...
      const queryDeps = (<InternalQuery<typeof gamesQuery['data']>>gamesQuery)
        .deps;
      const page = queryDeps[1];
      const deps = queryDeps.slice(2);

      return useInfiniteQuery<Result>(
        ListingCountKey,
        page,
        async (previous) => {
          const { games } = await gamesQuery.resolve();
          const products = getProducts(games, page);

          if (products.length === 0) {
            return previous;
          }

          const result = await fetch(products);

          return [...previous, ...result];
        },
        deps,
        {
          ttl: 30000,
          ...opts,
        },
      );
    },
);

export type ListingsCounts = ReturnType<typeof useListingsCounts>['data'];
