import { useAction, useCache } from '@respite/action';
import { FavouritesKey, ToggleFavouriteKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { CreateFavourite, RemoveFavourite } from 'core/user';

export const useToggleFavourite = encase(
  (create: CreateFavourite, remove: RemoveFavourite) => () => {
    const cache = useCache();

    return useAction(
      ToggleFavouriteKey,
      async ({ productId }: { productId: string }) => {
        const q = cache.getQuery<string[]>([FavouritesKey]);
        const favourites = [...q.data];
        const i = favourites.indexOf(productId);
        const exists = i >= 0;

        if (exists) {
          favourites.splice(i, 1);
          cache.success([FavouritesKey], favourites);
          await remove({ productId });
        } else {
          favourites.push(productId);
          cache.success([FavouritesKey], favourites);
          await create({ productId });
        }
      },
      [],
    );
  },
);
