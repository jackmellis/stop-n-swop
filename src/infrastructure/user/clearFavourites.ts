import jpex from 'jpex';
import type { ClearFavouritesLocal } from 'core/user';
import type { Persist } from 'core/io';

jpex.factory<ClearFavouritesLocal>((persist: Persist) => async () => {
  persist.delete('favourites');
});
