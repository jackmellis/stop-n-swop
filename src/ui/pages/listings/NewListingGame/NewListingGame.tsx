import React, { useEffect, useState } from 'react';
import { useGame, useGames } from 'application/games';
import { useDebounce } from 'use-debounce';
import { usePlatforms } from 'application/platforms';
import { Status } from '@respite/core';
import NewListingGameScreen from 'ui/modules/listings/new/game/Screen';
import GameSearch from 'ui/modules/listings/new/game/GameSearch';
import PlatformFinder from 'ui/modules/listings/new/game/PlatformFinder';
import Actions from 'ui/modules/listings/new/game/Actions';
import HelpButtons from 'ui/modules/listings/new/game/HelpButtons';
import PageTitle from 'ui/elements/PageTitle';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import Modal from 'ui/elements/Modal';
import HavingTrouble from 'ui/help/listings/havingTrouble.mdx';

export default function NewListingGame() {
  const getMessage = useGetMessage();
  const [showTrouble, setShowTrouble] = useState(false);
  const [search, setSearch] = useState('');
  const [productId, setProductId] = useState('');
  const [platformId, setPlatformId] = useState('');
  const [debouncedSearch] = useDebounce(search, 500);

  const gamesQuery = useGames({
    search: debouncedSearch,
    page: 0,
    available: null,
    platforms: [],
    group: true,
    favourites: false,
    developers: [],
    publishers: [],
  });
  const loaded = gamesQuery.status === Status.SUCCESS;
  const loading = [Status.LOADING, Status.FETCHING].includes(gamesQuery.status);
  // we only want to fetch the games when you've started searching
  const games = loaded && debouncedSearch ? gamesQuery.data.games : [];
  const { data: platforms } = usePlatforms();
  const gameQuery = useGame({ id: productId });

  useEffect(() => {
    // TODO: add a task to allow @respite to not suspend
    // rather than causing the app to suspend, we want to silently trigger the fetch once you've started searching
    if (debouncedSearch && gamesQuery.status === Status.IDLE) {
      gamesQuery.resolve();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <div className="flex-grow flex flex-col relative">
      <PageTitle>
        <span>{getMessage(ids.listings.new.pageTitle)}</span>
      </PageTitle>
      <NewListingGameScreen
        gameSearch={
          <GameSearch
            loading={loading}
            onSearch={setSearch}
            productId={productId}
            setProductId={setProductId}
            setPlatformId={setPlatformId}
            results={games}
          />
        }
        platformSearch={
          <PlatformFinder
            gameQuery={gameQuery}
            platformId={platformId}
            platforms={platforms}
            productId={productId}
            setPlatformId={setPlatformId}
            setProductId={setProductId}
          />
        }
        actions={
          <If condition={productId && platformId}>
            <Actions gameQuery={gameQuery} productId={productId} />
          </If>
        }
        helpButtons={<HelpButtons openTrouble={() => setShowTrouble(true)} />}
      />
      <Modal
        isOpen={showTrouble}
        title={getMessage(ids.listings.new.troubleTitle)}
        onClose={() => setShowTrouble(false)}
      >
        <div className="help">
          <HavingTrouble />
        </div>
      </Modal>
    </div>
  );
}
