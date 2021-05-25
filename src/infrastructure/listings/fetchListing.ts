import jpex from 'jpex';
import type { Driver } from 'core/io';
import type { FetchListing } from 'core/listings';
import type {
  GetListingRequest,
  GetListingResponse,
} from '@sns/contracts/listing';

const fetchListing =
  (driver: Driver): FetchListing =>
  async ({ id }) => {
    const response = await driver<GetListingRequest, GetListingResponse>({
      url: '/listings/{id}',
      params: { id },
    });

    return response.data;
  };

jpex.factory<FetchListing>(fetchListing);
