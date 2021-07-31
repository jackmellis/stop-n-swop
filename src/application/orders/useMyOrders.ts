import { QueryOptions, useQuery } from '@respite/query';
import { MyOrdersKey } from 'application/keys';
import { encase } from 'react-jpex';
import { STANDARD_TTL } from 'domain/constants';
import type { FetchMyOrders } from 'core/orders';

export const useMyOrders = encase(
  (fetchMyOrders: FetchMyOrders) => (opts?: QueryOptions) => {
    return useQuery(MyOrdersKey, fetchMyOrders, [], {
      ttl: STANDARD_TTL,
      ...opts,
    });
  },
);
