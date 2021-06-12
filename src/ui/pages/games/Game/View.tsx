import React, { useState } from 'react';
import Overview from 'ui/modules/games/view/Overview';
import QuickActions from 'ui/modules/games/view/QuickActions';
import { useParams } from 'react-router-dom';
import { useGame } from 'application/games';
import { usePlatform } from 'application/platforms';
import ListingsArea from './ListingsArea';

export default function View() {
  const [favourite, setFavourite] = useState(false);
  const { productId, platformId } =
    useParams<{
      productId: string;
      platformId: string;
    }>();
  const { data: game } = useGame({ id: productId });
  const { data: platform } = usePlatform({ id: platformId });
  const { releaseDate } = game.platforms.find(({ id }) => id === platformId);

  return (
    <div className="xl:w-4/5 xl:mx-auto flex-grow flex flex-col">
      <Overview
        banner={game.banner}
        cover={game.cover}
        developer={game.developers[0]}
        publisher={game.publishers[0]}
        name={game.name}
        releaseDate={releaseDate}
        platform={platform.name}
      />
      <QuickActions
        platformId={platformId}
        productId={productId}
        favourite={favourite}
        onFavouriteClick={() => setFavourite(!favourite)}
        onCollectClick={() => null}
      />
      <ListingsArea platformId={platformId} productId={productId} />
    </div>
  );
}
