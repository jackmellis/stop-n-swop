import React, { useMemo, useState } from 'react';
import fuzzy from 'fuzzy';
import { usePlatforms } from 'application/platforms';
import NewListing from './NewListing';

export default function ConnectedNewListing() {
  const [search, setSearch] = useState('');
  const [platformId, setPlatformId] = useState('');
  const { data: platforms } = usePlatforms();

  const results = useMemo(() => {
    if (!search) {
      return [];
    }

    return fuzzy
      .filter(search, platforms, {
        extract: (platform) => platform.name,
      })
      .sort((a, b) => b.score - a.score)
      .map((result) => result.original);
  }, [platforms, search]);

  return (
    <NewListing
      onSearch={setSearch}
      setPlatformId={setPlatformId}
      platformId={platformId}
      results={results}
    />
  );
}
