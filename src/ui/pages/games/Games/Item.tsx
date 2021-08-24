import React, { CSSProperties } from 'react';
import ProductItem from 'ui/modules/games/browse/ProductItem';
import Favourte from 'ui/modules/product/Favourite';
import type { Platform, Game } from '@sns/contracts/product';

export default function Item({
  style,
  game,
  platforms,
  listingCounts,
}: {
  game: Game;
  platforms: Platform[];
  listingCounts: Record<string, number>;
  style?: CSSProperties;
}) {
  return (
    <ProductItem
      game={game}
      favourite={<Favourte productId={game.id} />}
      platforms={platforms}
      listingCounts={listingCounts}
      style={style}
    />
  );
}
