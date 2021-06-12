import { QueryOptions, useQuery } from '@respite/query';
import { HistoryKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { FetchHistory } from 'core/orders';

export const useHistory = encase(
  (fetch: FetchHistory) =>
    ({ orderId }: { orderId: string }, opts?: QueryOptions) => {
      return useQuery(HistoryKey, () => fetch({ orderId }), [orderId], {
        ttl: 30000,
        ...opts,
      });
    },
);
