import jpex from 'jpex';
import type { GetTokens } from 'core/auth';
import type {
  FetchLocalBasket,
  FetchMyBasket,
  FetchRemoteBasket,
} from 'core/basket';
import type { AuthDriver, Persist } from 'core/io';
import type {
  Basket,
  FetchBasketRequest,
  FetchBasketResponse,
} from '@sns/contracts/basket';

const fetchLocalBasket =
  (persist: Persist): FetchLocalBasket =>
  () => {
    return persist.get<Basket>('basket');
  };

const fetchRemoteBasket =
  (driver: AuthDriver): FetchRemoteBasket =>
  async () => {
    const { data: basket } = await driver<
      FetchBasketRequest,
      FetchBasketResponse
    >({
      url: '/baskets/my',
    });
    return basket;
  };

const fetchMyBasket =
  (
    getTokens: GetTokens,
    fetchLocal: FetchLocalBasket,
    fetchRemote: FetchRemoteBasket,
  ): FetchMyBasket =>
  async () => {
    const { authToken } = await getTokens();
    if (authToken) {
      return fetchRemote();
    }

    return fetchLocal();
  };

jpex.factory<FetchMyBasket>(fetchMyBasket);
jpex.factory<FetchLocalBasket>(fetchLocalBasket);
jpex.factory<FetchRemoteBasket>(fetchRemoteBasket);
