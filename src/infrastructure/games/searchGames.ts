import jpex from 'jpex';
import { omitNullProperties } from 'crosscutting/utils';
import type {
  SearchGamesRequest,
  SearchGamesResponse,
} from '@sns/contracts/product';
import type { SearchGames } from 'core/games';
import type { AuthDriver } from 'core/io';

const searchGames =
  (driver: AuthDriver): SearchGames =>
  async ({
    page,
    platforms,
    search,
    available,
    group,
    favourites,
    developers,
    publishers,
  }) => {
    const { data } = await driver<SearchGamesRequest, SearchGamesResponse>({
      url: '/games',
      data: omitNullProperties({
        page,
        q: search,
        platformIds: platforms,
        available,
        group,
        favourites: favourites || null,
        developerIds: developers,
        publisherIds: publishers,
      }),
    });

    return data;
  };

jpex.factory<SearchGames>(searchGames);
