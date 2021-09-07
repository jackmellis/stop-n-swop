import { useQuery } from '@respite/query';
import { DiscountKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { FetchDiscount } from 'core/listings';

export const useDiscount = encase(
  (fetch: FetchDiscount) =>
    ({ productId }: { productId: string }) => {
      return useQuery(DiscountKey, () => fetch({ productId }), [productId]);
    },
);
