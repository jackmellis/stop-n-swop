import jpex from 'jpex';
import type { SubmitBasket } from 'core/basket';
import type { AuthDriver } from 'core/io';

const submitBasket =
  (driver: AuthDriver): SubmitBasket =>
  async () => {
    await driver({
      url: '/baskets/my',
      method: 'POST',
    });
  };

jpex.factory<SubmitBasket>(submitBasket);
