import { useAction } from '@respite/action';
import { SubmitBasketKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { SubmitBasket } from 'core/basket';

export const useSubmitBasket = encase((submit: SubmitBasket) => () => {
  return useAction(SubmitBasketKey, submit, []);
});
