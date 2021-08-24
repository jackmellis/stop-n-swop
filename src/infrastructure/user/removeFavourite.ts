import jpex from 'jpex';
import type {
  RemoveFavourite,
  RemoveFavouriteApi,
  RemoveFavouriteLocal,
} from 'core/user';
import type { AuthDriver, Persist } from 'core/io';
import type { GetTokens } from 'core/auth';

jpex.factory<RemoveFavouriteLocal>(
  (persist: Persist): RemoveFavourite =>
    async ({ productId }) => {
      const favourites = (await persist.get<string[]>('favourites')) ?? [];
      const i = favourites.indexOf(productId);
      if (i >= 0) {
        favourites.splice(i, 1);
        await persist.set('favourites', favourites);
      }
    },
);

jpex.factory<RemoveFavouriteApi>(
  (driver: AuthDriver): RemoveFavourite =>
    async ({ productId }) => {
      await driver({
        url: '/users/my/favourites/{productId}',
        params: { productId },
        method: 'DELETE',
      });
    },
);

jpex.factory<RemoveFavourite>(
  (
      getTokens: GetTokens,
      removeLocal: RemoveFavouriteLocal,
      removeApi: RemoveFavouriteApi,
    ): RemoveFavourite =>
    async (args) => {
      const { authToken } = await getTokens();

      return authToken ? removeApi(args) : removeLocal(args);
    },
);
