import jpex from 'jpex';
import { omitNullishProperties } from 'crosscutting/utils';
import type {
  SearchListingsRequest,
  SearchListingsResponse,
} from '@sns/contracts/listing';
import type { Driver } from 'core/io';
import type { SearchListings } from 'core/listings';

const searchListings =
  (driver: Driver): SearchListings =>
  async (data) => {
    const {
      data: { listings },
    } = await driver<SearchListingsRequest, SearchListingsResponse>({
      url: '/listings',
      data: omitNullishProperties(data),
    });

    return listings;
  };

jpex.factory<SearchListings>(searchListings);
