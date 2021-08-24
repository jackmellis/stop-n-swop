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
  favouriteIds,
}: {
  platformsQuery: Query<Platform[]>;
  gamesQuery: Query<{ games: Game[]; nextPage: number }>;
  listingsCountsQuery: ReturnType<typeof useListingsCounts>;
  platformIds: string[];
  favouriteIds: string[] | null;
}) {
  let {
    data: { games },
  } = gamesQuery;
  const { data: platforms } = platformsQuery;
  const { data: listingsCounts } = listingsCountsQuery;

  // If we're filtering by favourites, rather than constantly re-fetching and polling
  // and so that you don't have unfavourited items show for 2 minutes or whatever
  // we'll just manually remove them from the list at render time
  // the counts may be out until the next refetch but I think that's okay...
  if (favouriteIds && games.length) {
    games = games.filter((game) => favouriteIds.includes(game.id));
  }

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
