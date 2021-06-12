import { useSelector } from '@respite/select';
import type { QueryOptions } from '@respite/query';
import { useMyOrders } from './useMyOrders';

export const useMyOrder = ({ id }: { id: string }, opts?: QueryOptions) => {
  const query = useMyOrders(opts);
  return useSelector(query, (orders) =>
    orders.find((order) => order.id === id),
  );
};
