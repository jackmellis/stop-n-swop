import React, { useEffect, useState, Suspense } from 'react';
import Screen from 'ui/modules/games/browse/Screen';
import { usePlatforms } from 'application/platforms';
import { useCounts, useGames } from 'application/games';
import { useDebounce } from 'use-debounce';
import { useListingsCounts } from 'application/listings';
import LoadingPage from 'ui/pages/Loading';
import { useFavourites } from 'application/user';
import { useIsLoggedIn } from 'application/auth';
import Items from './Items';
import { useInitialValues, useResetParams, useSyncUrl } from './utils';

export default function Browse() {
  const {
    initialAvailable,
    initialPlatforms,
    initialSearch,
    initialFavourites,
  } = useInitialValues();
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState(initialSearch);
  const [platformIds, setPlatformIds] = useState<string[]>(initialPlatforms);
  const [favourites, setFavourites] = useState(initialFavourites);
  const [available, setAvailable] = useState(initialAvailable);
  const [latentSearch, { flush }] = useDebounce(search, 500);

  const platformsQuery = usePlatforms();
  const gamesQuery = useGames({
    search: latentSearch,
    page,
    platforms: platformIds,
    available,
    group: true,
    favourites,
  });
  const gamesCountsQuery = useCounts({
    available,
    platforms: platformIds,
    search: latentSearch,
    favourites,
  });
  const listingsCountsQuery = useListingsCounts(gamesQuery);
  const { data: favouriteIds } = useFavourites();
  const isLoggedIn = useIsLoggedIn();
  const hasSearched =
    Boolean(latentSearch) || platformIds.length > 0 || available || favourites;

  useResetParams({
    available,
    initialAvailable,
    setAvailable,
    favourites,
    initialFavourites,
    setFavourites,
    initialPlatforms,
    platformIds,
    setPlatformIds,
    search,
    latentSearch,
    initialSearch,
    setSearch,
    flush,
    setPage,
  });

  useSyncUrl({ available, latentSearch, platformIds, search, favourites });

  // Reset the pagination when a search criteria changes
  useEffect(() => {
    setPage(0);
  }, [platformIds, favourites, search, available]);

  return (
    <Screen
      gamesQuery={gamesQuery}
      platformsQuery={platformsQuery}
      listingsCountsQuery={listingsCountsQuery}
      gamesCountsQuery={gamesCountsQuery}
      search={search}
      platformIds={platformIds}
      onSearch={setSearch}
      setPlatformIds={setPlatformIds}
      hasSearched={hasSearched}
      setPage={setPage}
      available={available}
      setAvailable={setAvailable}
      favourites={favourites}
      isLoggedIn={isLoggedIn}
      setFavourites={setFavourites}
    >
      <Suspense fallback={<LoadingPage />}>
        <Items
          gamesQuery={gamesQuery}
          platformsQuery={platformsQuery}
          platformIds={platformIds}
          listingsCountsQuery={listingsCountsQuery}
          favouriteIds={favourites ? favouriteIds : null}
        />
      </Suspense>
    </Screen>
  );
}
