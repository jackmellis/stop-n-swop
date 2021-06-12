import jpex from 'jpex';
import type {
  PatchOrderResponse,
  PatchOrderRequest,
} from '@sns/contracts/order';
import type { AuthDriver } from 'core/io';
import type { ChangeStatus } from 'core/orders';

const changeStatus =
  (driver: AuthDriver): ChangeStatus =>
  async ({ orderId, status }) => {
    await driver<PatchOrderRequest, PatchOrderResponse>({
      url: '/orders/{orderId}',
      params: { orderId },
      method: 'PATCH',
      data: {
        status,
      },
    });
  };

jpex.factory<ChangeStatus>(changeStatus);
