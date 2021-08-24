import { useSelector } from '@respite/select';
import { useFavourites } from './useFavourites';

export const useFavourite = (productId: string) => {
  return useSelector(useFavourites(), (favourites) =>
    favourites.includes(productId),
  );
};
