import jpex from 'jpex';
import { omitNullProperties } from 'crosscutting/utils';
import type {
  SearchGamesRequest,
  SearchGamesResponse,
} from '@sns/contracts/product';
import type { SearchGames } from 'core/games';
import type { Driver } from 'core/io';

const searchGames =
  (driver: Driver): SearchGames =>
  async ({ page, platforms, search, available }) => {
    const { data } = await driver<SearchGamesRequest, SearchGamesResponse>({
      url: '/games',
      data: omitNullProperties({
        page,
        q: search,
        platformIds: platforms,
        available,
      }),
    });

    return data;
  };

jpex.factory<SearchGames>(searchGames);
