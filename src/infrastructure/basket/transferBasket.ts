import jpex from 'jpex';
import type {
  AddToRemoteBasket,
  ClearLocalBasket,
  FetchLocalBasket,
  TransferBasket,
} from 'core/basket';

const transferBasket =
  (
    fetchLocal: FetchLocalBasket,
    addToRemote: AddToRemoteBasket,
    clearLocal: ClearLocalBasket,
  ): TransferBasket =>
  async () => {
    const basket = await fetchLocal();
    if (basket == null) {
      return;
    }
    await Promise.all(
      basket.items.map(({ listingId }) => {
        return addToRemote({ listingId });
      }),
    );
    await clearLocal();
  };

jpex.factory<TransferBasket>(transferBasket);
