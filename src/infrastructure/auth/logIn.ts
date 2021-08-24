import jpex from 'jpex';
import type { LogIn } from 'core/auth';
import type { Driver } from 'core/io';
import type { LoginRequest, LoginResponse } from '@sns/contracts/user';
import type { ClearFavouritesLocal, FetchFavouritesLocal } from 'core/user';

const logIn =
  (
    driver: Driver,
    fetchFavourites: FetchFavouritesLocal,
    clearFavourites: ClearFavouritesLocal,
  ): LogIn =>
  async ({ provider, token }) => {
    const favourites = await fetchFavourites();

    const response = await driver<LoginRequest, LoginResponse>({
      url: '/auth/sessions',
      method: 'POST',
      data: { provider, token, favouriteProductIds: favourites },
    });

    await clearFavourites();

    const {
      data: { authToken, refreshToken, userId },
    } = response;

    return { authToken, refreshToken, userId };
  };

jpex.factory<LogIn>(logIn);
