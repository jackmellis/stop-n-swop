import jpex from 'jpex';
import type { FetchDiscount } from 'core/listings';
import type { AuthDriver } from 'core/io';
import type { GetDiscountResponse } from '@sns/contracts/listing';

jpex.factory<FetchDiscount>(
  (driver: AuthDriver): FetchDiscount =>
    async ({ productId }) => {
      const { data: discount } = await driver<void, GetDiscountResponse>({
        url: '/games/{productId}/discount',
        params: { productId },
      });

      return discount;
    },
);
