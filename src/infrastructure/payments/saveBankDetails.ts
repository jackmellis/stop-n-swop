import jpex from 'jpex';
import type { SaveBankDetails } from 'core/payments';
import type { AuthDriver } from 'core/io';
import type {
  SaveBankDetailsRequest,
  SaveBankDetailsResponse,
} from '@sns/contracts/payment';

jpex.factory<SaveBankDetails>(
  (driver: AuthDriver): SaveBankDetails =>
    async (data) => {
      await driver<SaveBankDetailsRequest, SaveBankDetailsResponse>({
        url: '/users/my/account',
        method: 'PUT',
        data,
      });
    },
);
