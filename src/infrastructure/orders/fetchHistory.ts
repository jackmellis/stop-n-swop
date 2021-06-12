import jpex from 'jpex';
import type { AuthDriver } from 'core/io';
import type { FetchHistory } from 'core/orders';
import type {
  GetHistoryRequest,
  GetHistoryResponse,
} from '@sns/contracts/order';

const fetchHistory =
  (driver: AuthDriver): FetchHistory =>
  async ({ orderId }) => {
    const {
      data: { history },
    } = await driver<GetHistoryRequest, GetHistoryResponse>({
      url: '/orders/{orderId}/history',
      params: { orderId },
    });

    return history;
  };

jpex.factory<FetchHistory>(fetchHistory);
