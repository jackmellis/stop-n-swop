import jpex from 'jpex';
import type {
  ChangeListingStatusRequest,
  ChangeListingStatusResponse,
} from '@sns/contracts/listing';
import type { AuthDriver } from 'core/io';
import type { ChangeListingStatus } from 'core/listings';

const changeListingStatus =
  (driver: AuthDriver): ChangeListingStatus =>
  async ({ id, status }) => {
    await driver<ChangeListingStatusRequest, ChangeListingStatusResponse>({
      url: '/listings/{id}/status',
      params: { id },
      method: 'POST',
      data: { status },
    });
  };

jpex.factory<ChangeListingStatus>(changeListingStatus);
