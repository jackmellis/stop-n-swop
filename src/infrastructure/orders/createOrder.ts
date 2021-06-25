import jpex from 'jpex';
import type {
  CreateOrderRequest,
  CreateOrderResponse,
} from '@sns/contracts/order';
import type { AuthDriver } from 'core/io';
import type { CreateOrder } from 'core/orders';

const createOrder =
  (driver: AuthDriver): CreateOrder =>
  async ({ listingId }) => {
    const {
      data: { id },
    } = await driver<CreateOrderRequest, CreateOrderResponse>({
      url: '/orders',
      method: 'POST',
      data: {
        listingId,
      },
    });

    return { orderId: id };
  };

jpex.factory<CreateOrder>(createOrder);
