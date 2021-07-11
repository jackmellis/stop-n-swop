import React from 'react';
import { useGetMessage } from 'ui/intl';
import { Checkbox, CheckboxGroup, CheckboxGroupItem } from 'ui/elements/check';
import { ids } from 'ui/messages';
import { Filter } from 'ui/modules/product/filters';
import type { Platform } from '@sns/contracts/product';
import type { useCounts } from 'application/games';

interface Props {
  available: boolean;
  setAvailable(value: boolean): void;
  platforms: Platform[];
  platformIds: string[];
  setPlatformIds(value: string[]): void;
  hasSearched: boolean;
  gamesCountsQuery: ReturnType<typeof useCounts>;
}

export default function BrowseFilters({
  hasSearched,
  available,
  setAvailable,
  platforms,
  platformIds,
  setPlatformIds,
  gamesCountsQuery,
}: Props) {
  const getMessage = useGetMessage();
  const {
    data: { platforms: platformCounts, available: availableCount },
  } = gamesCountsQuery;

  const availableLabel = hasSearched
    ? `${getMessage(
        ids.games.filters.preferences.available,
      )} (${availableCount})`
    : getMessage(ids.games.filters.preferences.available);

  return (
    <>
      <Filter
        name="preferences"
        label={getMessage(ids.games.filters.preferences.label)}
      >
        <Checkbox
          label={availableLabel}
          value={available}
          onChange={setAvailable}
        />
      </Filter>
      <Filter
        name="platform"
        label={getMessage(ids.games.filters.platform.label)}
      >
        <CheckboxGroup value={platformIds} onChange={setPlatformIds} limit={10}>
          {platforms
            .filter(({ id }) => {
              const count = platformCounts[id] ?? 0;

              return !hasSearched || count > 0;
            })
            .map(({ name, id }) => {
              const count = platformCounts[id] ?? 0;

              const label = hasSearched ? `${name} (${count})` : name;

              return <CheckboxGroupItem key={id} label={label} value={id} />;
            })}
        </CheckboxGroup>
      </Filter>
    </>
  );
}
