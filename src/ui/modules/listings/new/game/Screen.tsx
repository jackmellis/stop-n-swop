import React, { ReactNode, Suspense } from 'react';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import Loader from 'ui/modules/Loader';
import Card from 'ui/elements/Card';

interface Props {
  gameSearch: ReactNode;
  platformSearch: ReactNode;
  helpButtons: ReactNode;
  actions: ReactNode;
}

export default function NewListingGameScreen({
  gameSearch,
  platformSearch,
  helpButtons,
  actions,
}: Props) {
  const getMessage = useGetMessage();

  return (
    <div className="flex-grow flex flex-col md:justify-center md:items-center">
      <Card
        title={getMessage(ids.listings.new.title)}
        className="w-full max-w-screen-md flex-grow flex flex-col lg:flex-grow-0"
        innerClassName="flex-grow flex flex-col md:flex-grow-0"
      >
        <div className="space-y-8 flex-grow flex flex-col items-start">
          <h3 className="text-lg">{getMessage(ids.listings.new.game.label)}</h3>
          {gameSearch}
          <Suspense fallback={<Loader sensible />}>{platformSearch}</Suspense>
          <div className="flex w-full justify-between items-end">
            {helpButtons}
          </div>
          {actions}
        </div>
      </Card>
    </div>
  );
}
