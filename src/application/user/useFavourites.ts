import { useQuery } from '@respite/query';
import { FavouritesKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { FetchFavourites } from 'core/user';

export const useFavourites = encase((fetch: FetchFavourites) => () => {
  return useQuery(FavouritesKey, fetch, []);
});
