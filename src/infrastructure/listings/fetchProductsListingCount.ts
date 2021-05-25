import jpex from 'jpex';
import type { Driver } from 'core/io';
import type { FetchProductsListingCount } from 'core/listings';
import type {
  GetProductsListingCountRequest,
  GetProductsListingCountResponse,
} from '@sns/contracts/listing';

const fetchProductsListingCount =
  (driver: Driver): FetchProductsListingCount =>
  async (products) => {
    const response = await driver<
      GetProductsListingCountRequest,
      GetProductsListingCountResponse
    >({
      url: '/listings/counts',
      data: { products },
    });

    return response.data.counts;
  };

jpex.factory<FetchProductsListingCount>(fetchProductsListingCount);
