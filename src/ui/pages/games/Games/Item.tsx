import React, { CSSProperties, useState } from 'react';
import ProductItem from 'ui/modules/games/browse/ProductItem';
import type { Platform, Game } from '@sns/contracts/product';

export default function Item({
  style,
  game,
  platform,
  totalListings,
}: {
  game: Game;
  platform: Platform;
  totalListings: number;
  style?: CSSProperties;
}) {
  const [favourite, setFavourite] = useState(false);

  return (
    <ProductItem
      game={game}
      favourite={favourite}
      onFavouriteClick={() => setFavourite(!favourite)}
      platform={platform}
      totalListings={totalListings}
      style={style}
    />
  );
}
