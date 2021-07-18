import jpex from 'jpex';
import type { FetchCards } from 'core/payments';
import type { GetCardsResponse } from '@sns/contracts/payment';
import type { AuthDriver } from 'core/io';

jpex.factory<FetchCards>((driver: AuthDriver) => async () => {
  const {
    data: { cards },
  } = await driver<void, GetCardsResponse>({
    url: '/users/my/cards',
  });

  return cards;
});
