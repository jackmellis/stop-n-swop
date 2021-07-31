import { ListingCountKey } from 'application/keys';
import { encase } from 'react-jpex';
import { useGames, useInfiniteQuery } from 'application/games';
import { SHORT_TTL } from 'domain/constants';
import type { InternalQuery } from '@respite/core';
import type { QueryOptions } from '@respite/query';
import type { Game } from '@sns/contracts/product';
import type { FetchProductsListingCount } from 'core/listings';

type Result = Record<string, number>;

const getProductIds = (games: Game[], page: number) => {
  const start = page * 20;
  const end = page * 20 + 20;

  return games.slice(start, end).map((game) => game.id);
};

const getPageAndDeps = (
  gamesQuery: ReturnType<typeof useGames>,
): [number, any[]] => {
  const queryDeps = (<InternalQuery<typeof gamesQuery['data']>>gamesQuery).deps;
  const page = queryDeps[1];
  const deps = queryDeps.slice(2);

  return [page, deps];
};

export const useListingsCounts = encase(
  (fetch: FetchProductsListingCount) =>
    (gamesQuery: ReturnType<typeof useGames>, opts?: QueryOptions) => {
      // TODO: clean all of this up...
      const [page, deps] = getPageAndDeps(gamesQuery);

      return useInfiniteQuery<Result>(
        ListingCountKey,
        page,
        async (previous) => {
          const { games } = await gamesQuery.resolve();
          const productIds = getProductIds(games, page);

          if (productIds.length === 0) {
            return previous;
          }

          const result = await fetch({ productIds });

          return result.reduce((acc, { count, productId }) => {
            return {
              ...acc,
              [productId]: count,
            };
          }, previous);
        },
        deps,
        {
          ttl: SHORT_TTL,
          initialState: {},
          ...opts,
        },
      );
    },
);

export type ListingsCounts = ReturnType<typeof useListingsCounts>['data'];
