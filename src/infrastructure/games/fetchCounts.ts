import jpex from 'jpex';
import type {
  GetSearchCountsRequest,
  GetSearchCountsResponse,
} from '@sns/contracts/product';
import type { FetchCounts } from 'core/games';
import type { AuthDriver } from 'core/io';

const fetchCounts =
  (driver: AuthDriver): FetchCounts =>
  async ({ platforms, search, available, favourites }) => {
    if (!platforms.length && !search && !available && !favourites) {
      return {
        available: 0,
        platforms: {},
        total: 0,
      };
    }

    const { data } = await driver<
      GetSearchCountsRequest,
      GetSearchCountsResponse
    >({
      url: '/games/counts',
      data: {
        q: search,
        platformIds: platforms,
        available,
        favourites,
      },
    });

    return data;
  };

jpex.factory<FetchCounts>(fetchCounts);
