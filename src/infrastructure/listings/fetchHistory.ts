import jpex from 'jpex';
import type { AuthDriver } from 'core/io';
import type { FetchHistory } from 'core/listings';
import type {
  GetHistoryRequest,
  GetHistoryResponse,
} from '@sns/contracts/listing';

const fetchHistory =
  (driver: AuthDriver): FetchHistory =>
  async ({ listingId }) => {
    const {
      data: { history },
    } = await driver<GetHistoryRequest, GetHistoryResponse>({
      url: '/listings/{listingId}/history',
      params: { listingId },
    });

    return history;
  };

jpex.factory<FetchHistory>(fetchHistory);
