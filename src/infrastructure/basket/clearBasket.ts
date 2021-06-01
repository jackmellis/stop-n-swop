import jpex from 'jpex';
import type { ClearLocalBasket } from 'core/basket';
import type { Persist } from 'core/io';

const clearLocalBasket =
  (persist: Persist): ClearLocalBasket =>
  () => {
    return persist.delete('basket');
  };

jpex.factory<ClearLocalBasket>(clearLocalBasket);
