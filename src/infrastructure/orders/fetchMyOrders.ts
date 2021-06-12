import jpex from 'jpex';
import type { SearchOrdersResponse } from '@sns/contracts/order';
import type { AuthDriver } from 'core/io';
import type { FetchMyOrders } from 'core/orders';

const fetchMyOrders =
  (driver: AuthDriver): FetchMyOrders =>
  async () => {
    const {
      data: { orders },
    } = await driver<void, SearchOrdersResponse>({
      url: '/orders/my',
    });

    return orders;
  };

jpex.factory<FetchMyOrders>(fetchMyOrders);
