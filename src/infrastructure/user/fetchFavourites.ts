import jpex from 'jpex';
import type {
  FetchFavourites,
  FetchFavouritesApi,
  FetchFavouritesLocal,
} from 'core/user';
import type { AuthDriver, Persist } from 'core/io';
import type { GetTokens } from 'core/auth';
import type { FetchFavouritesResponse } from '@sns/contracts/user';

jpex.factory<FetchFavouritesLocal>((persist: Persist) => async () => {
  const favourites = (await persist.get<string[]>('favourites')) ?? [];

  return favourites;
});

jpex.factory<FetchFavouritesApi>((driver: AuthDriver) => async () => {
  const {
    data: { favourites },
  } = await driver<void, FetchFavouritesResponse>({
    url: '/users/my/favourites',
  });

  return favourites;
});

jpex.factory<FetchFavourites>(
  (
      getTokens: GetTokens,
      fetchLocal: FetchFavouritesLocal,
      fetchApi: FetchFavouritesApi,
    ) =>
    async () => {
      const { authToken } = await getTokens();

      return authToken ? fetchApi() : fetchLocal();
    },
);
