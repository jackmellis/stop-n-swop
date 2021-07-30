import React, { useState } from 'react';
import { useGames } from 'application/games';
import { useDebounce } from 'use-debounce';
import { usePlatforms } from 'application/platforms';
import NewListing from './NewListingGame';

export default function ConnectedNewListing() {
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 500);
  const [productId, setProductId] = useState('');
  const gamesQuery = useGames({
    search: debouncedSearch,
    page: 0,
    available: null,
    platforms: [],
  });
  const { games } = gamesQuery.data;
  const { data: platforms } = usePlatforms();

  return (
    <NewListing
      onSearch={setSearch}
      productId={productId}
      setProductId={setProductId}
      results={games}
      platforms={platforms}
    />
  );
}
