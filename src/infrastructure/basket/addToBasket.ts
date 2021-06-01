import { ulid } from 'ulid';
import {
  AddToBasketRequest,
  AddToBasketResponse,
  Status,
} from '@sns/contracts/basket';
import jpex from 'jpex';
import type { GetTokens } from 'core/auth';
import type {
  AddToBasket,
  AddToLocalBasket,
  AddToRemoteBasket,
  FetchLocalBasket,
} from 'core/basket';
import type { AuthDriver, Persist } from 'core/io';

const addToLocalBasket =
  (persist: Persist, fetchBasket: FetchLocalBasket): AddToLocalBasket =>
  async ({ listingId }) => {
    let basket = await fetchBasket();

    if (basket == null) {
      basket = {
        id: ulid(),
        status: Status.LOCAL_ONLY,
        items: [],
      };
    }

    basket.items.push({
      id: ulid(),
      listingId,
    });

    persist.set('basket', basket);
  };

const addToRemoteBasket =
  (driver: AuthDriver): AddToRemoteBasket =>
  async ({ listingId }) => {
    await driver<AddToBasketRequest, AddToBasketResponse>({
      method: 'POST',
      url: '/baskets/my/items',
      data: { listingId },
    });
  };

const addToBasket =
  (
    getTokens: GetTokens,
    addLocal: AddToLocalBasket,
    addRemote: AddToRemoteBasket,
  ): AddToBasket =>
  async ({ listingId }) => {
    const { authToken } = await getTokens();
    if (authToken) {
      return addRemote({ listingId });
    }

    return addLocal({ listingId });
  };

jpex.factory<AddToBasket>(addToBasket);
jpex.factory<AddToLocalBasket>(addToLocalBasket);
jpex.factory<AddToRemoteBasket>(addToRemoteBasket);
