import React from 'react';
import { useMessage } from 'ui/intl';
import Card from 'ui/elements/Card';
import PageTitle from 'ui/elements/PageTitle';
import { ids } from 'ui/messages';
import GameFinder from 'ui/modules/listings/new/Game';
import type { Game, Platform } from '@sns/contracts/product';

interface Props {
  productId: string;
  results: Game[];
  platforms: Platform[];
  onSearch(value: string): void;
  setProductId(value: string): void;
}

export default function NewListing({
  productId,
  results,
  platforms,
  onSearch,
  setProductId,
}: Props) {
  return (
    <div className="flex-grow flex flex-col relative">
      <PageTitle>
        <span>{useMessage(ids.listings.new.pageTitle)}</span>
      </PageTitle>
      <Card
        title={useMessage(ids.listings.new.title)}
        className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform w-full xl:w-4/5"
      >
        <GameFinder
          productId={productId}
          platforms={platforms}
          results={results}
          onSearch={onSearch}
          setProductId={setProductId}
        />
      </Card>
    </div>
  );
}
