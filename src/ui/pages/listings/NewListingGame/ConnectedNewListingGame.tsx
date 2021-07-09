import React, { useState } from 'react';
import { useGames } from 'application/games';
import { useParams } from 'react-router-dom';
import NewListing from './NewListingGame';

export default function ConnectedNewListing() {
  const { platformId } = useParams<{ platformId: string }>();
  const [search, setSearch] = useState('');
  const [productId, setProductId] = useState('');
  const {
    data: { games: results },
  } = useGames({
    search,
    page: 0,
    platforms: [platformId],
    available: null,
  });

  return (
    <NewListing
      onSearch={setSearch}
      productId={productId}
      platformId={platformId}
      setProductId={setProductId}
      results={results}
    />
  );
}
