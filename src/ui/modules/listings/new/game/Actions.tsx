import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { makeGameNewListingPath } from 'ui/constants/paths';
import Button from 'ui/elements/Button';
import { FaArrowRight } from 'react-icons/fa';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import Loader from 'ui/modules/Loader';
import type { Game } from '@sns/contracts/product';
import type { Query } from '@respite/core';
import Preview from './Preview';

interface Props {
  productId: string;
  gameQuery: Query<Game>;
}

export default function Actions({ productId, gameQuery }: Props) {
  const getMessage = useGetMessage();

  return (
    <div className="flex flex-col justify-around sm:flex-row flex-grow w-full">
      <div className="w-3/4 mx-auto sm:mx-0 sm:w-1/2">
        <Suspense
          fallback={
            <div className="flex justify-center items-center">
              <Loader sensible />
            </div>
          }
        >
          <Preview gameQuery={gameQuery} />
        </Suspense>
      </div>
      <div className="sm:w-1/2 flex justify-center items-center">
        <Button
          component={Link}
          kind="primary"
          to={makeGameNewListingPath({ productId })}
          className="w-full sm:w-auto"
          style={{ minWidth: '75%' }}
        >
          <span className="pr-3">
            {getMessage(ids.listings.new.game.button)}
          </span>
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
