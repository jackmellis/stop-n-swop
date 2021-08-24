import jpex from 'jpex';
import type {
  CreateFavourite,
  CreateFavouriteApi,
  CreateFavouriteLocal,
} from 'core/user';
import type { AuthDriver, Persist } from 'core/io';
import type { GetTokens } from 'core/auth';

jpex.factory<CreateFavouriteLocal>(
  (persist: Persist) =>
    async ({ productId }) => {
      const favourites = (await persist.get<string[]>('favourites')) ?? [];
      favourites.push(productId);
      await persist.set('favourites', favourites);
    },
);

jpex.factory<CreateFavouriteApi>(
  (driver: AuthDriver) =>
    async ({ productId }) => {
      await driver({
        url: '/users/my/favourites/{productId}',
        params: { productId },
        method: 'PUT',
      });
    },
);

jpex.factory<CreateFavourite>(
  (
      getTokens: GetTokens,
      createLocal: CreateFavouriteLocal,
      createApi: CreateFavouriteApi,
    ): CreateFavourite =>
    async (args) => {
      const { authToken } = await getTokens();

      return authToken ? createApi(args) : createLocal(args);
    },
);
