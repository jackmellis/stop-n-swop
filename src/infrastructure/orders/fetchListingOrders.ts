import jpex from 'jpex';
import type { FetchListingOrders } from 'core/orders';
import type {
  SearchOrdersRequest,
  SearchOrdersResponse,
} from '@sns/contracts/order';
import type { AuthDriver } from 'core/io';

const fetchListingOrders =
  (driver: AuthDriver): FetchListingOrders =>
  async ({ listingId }) => {
    const {
      data: { orders },
    } = await driver<SearchOrdersRequest, SearchOrdersResponse>({
      url: '/orders',
      data: {
        listingId,
        active: true,
      },
    });

    return orders;
  };

jpex.factory<FetchListingOrders>(fetchListingOrders);
