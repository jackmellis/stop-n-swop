import jpex from 'jpex';
import type {
  GetListingRequirementsRequest,
  GetListingRequirementsResponse,
} from '@sns/contracts/listing';
import type { Driver } from 'core/io';
import type { FetchListingRequirements } from 'core/listings';

const fetchListingRequirements =
  (driver: Driver): FetchListingRequirements =>
  async ({ platformId, productId }) => {
    const {
      data: { photos },
    } = await driver<
      GetListingRequirementsRequest,
      GetListingRequirementsResponse
    >({
      url: '/games/{productId}/{platformId}/requirements',
      params: {
        platformId,
        productId,
      },
    });

    return {
      images: photos,
    };
  };

jpex.factory<FetchListingRequirements>(fetchListingRequirements);
