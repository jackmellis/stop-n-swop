import React from 'react';
import Select from 'ui/elements/Select';
import type { Query } from '@respite/core';
import type { Game, Platform } from '@sns/contracts/product';

interface Props {
  productId: string;
  platformId: string;
  setPlatformId(value: string): void;
  setProductId(value: string): void;
  gameQuery: Query<Game>;
  platforms: Platform[];
}

export default function PlatformFinder({
  productId,
  platformId,
  setPlatformId,
  setProductId,
  gameQuery,
  platforms: allPlatforms,
}: Props) {
  if (!productId) {
    return null;
  }

  const { data: game } = gameQuery;

  const platforms =
    game.platformIds.map((id) => {
      return allPlatforms.find((platform) => platform.id === id);
    }) ?? [];

  const platformOptions = platforms.map((platform) => {
    const value = platform.id;
    const label = platform.name;

    return { value, label };
  });

  return (
    <div className="w-full">
      <Select
        id="platform_search"
        label=""
        value={platformId}
        onChange={(e) => {
          const { value } = e.target;
          setPlatformId(value);
          setProductId(`${value}-${game.gameId}`);
        }}
        options={platformOptions}
        disabled={platforms.length <= 1}
      />
    </div>
  );
}
