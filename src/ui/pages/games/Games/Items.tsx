import React from 'react';
import { useCascade } from 'ui/hooks';
import type { useListingsCounts } from 'application/listings';
import type { Query } from '@respite/core';
import type { Game, Platform } from '@sns/contracts/product';
import Item from './Item';

export default function Items({
  platformsQuery,
  gamesQuery,
  listingsCountsQuery,
  platformIds,
}: {
  platformsQuery: Query<Platform[]>;
  gamesQuery: Query<{ games: Game[]; nextPage: number }>;
  listingsCountsQuery: ReturnType<typeof useListingsCounts>;
  platformIds: string[];
}) {
  const {
    data: { games },
  } = gamesQuery;
  const { data: platforms } = platformsQuery;
  const { data: listingsCounts } = listingsCountsQuery;
  const totalResults = games.length;
  const cascade = useCascade(totalResults);

  let i = -1;

  return (
    <>
      {games.map((game) => {
        i += 1;

        return (
          <Item
            key={game.id}
            game={game}
            platforms={platforms.filter((platform) => {
              if (platformIds.length && !platformIds.includes(platform.id)) {
                return false;
              }
              return game.platformIds.includes(platform.id);
            })}
            listingCounts={listingsCounts}
            style={cascade(i)}
          />
        );
      })}
    </>
  );
}
