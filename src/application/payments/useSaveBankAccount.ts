import { useAction } from '@respite/action';
import { SaveBankKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { SaveBankDetails } from 'core/payments';

export const useSaveBankAccount = encase((save: SaveBankDetails) => () => {
  return useAction(SaveBankKey, save, []);
});
