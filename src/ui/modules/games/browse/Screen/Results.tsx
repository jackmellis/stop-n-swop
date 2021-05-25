import React, { ReactNode } from 'react';
import { ProductList } from 'ui/modules/product/products';
import Filters from 'ui/modules/games/browse/Filters';
import { Query, Status } from '@respite/core';
import type { Platform } from '@sns/contracts/product';
import type { useGames } from 'application/games';
import More from '../More';
import Empty from '../Empty';

export default function Results({
  platformsQuery,
  gamesQuery,
  hasSearched,
  platformIds,
  setPlatformIds,
  children,
  setPage,
  available,
  setAvailable,
}: {
  hasSearched: boolean;
  platformsQuery: Query<Platform[]>;
  gamesQuery: ReturnType<typeof useGames>;
  platformIds: string[];
  setPlatformIds(value: string[]): void;
  setPage(page: number): void;
  children: ReactNode;
  available: boolean;
  setAvailable(value: boolean): void;
}) {
  const {
    data: {
      nextPage,
      counts: { platforms: platformCounts },
    },
    status,
  } = gamesQuery;
  const { data: platforms } = platformsQuery;
  const loading = status === Status.FETCHING || status === Status.LOADING;

  return (
    <div className="flex-grow flex flex-col lg:flex-row">
      <Filters
        platforms={platforms}
        platformIds={platformIds}
        setPlatformIds={setPlatformIds}
        platformCounts={platformCounts}
        hasSearched={hasSearched}
        available={available}
        setAvailable={setAvailable}
      />
      <Choose>
        <When condition={!hasSearched}>
          <Empty />
        </When>
        <Otherwise>
          <div className="flex-grow">
            <ProductList>{children}</ProductList>
            <If condition={nextPage != null && nextPage >= 0}>
              <More nextPage={nextPage} setPage={setPage} loading={loading} />
            </If>
          </div>
        </Otherwise>
      </Choose>
    </div>
  );
}
