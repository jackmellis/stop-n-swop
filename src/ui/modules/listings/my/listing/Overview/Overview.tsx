import React, { ReactNode, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { makeGameListingPath } from 'ui/constants/paths';
import Button from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import Loader from 'ui/modules/Loader';
import PriceBreakdown from 'ui/modules/listings/PriceBreakdown';
import type { Status as IStatus } from '@sns/contracts/order';
import Buyer from '../Buyer';
import Status from '../Status';
import type { Listing } from '@sns/contracts/listing';

interface Props {
  productId: string;
  listingId: string;
  orderId: string;
  status: IStatus;
  buyer: string;
  listing: Listing;
  history: ReactNode;
  actions: ReactNode;
  buyerAddress: ReactNode;
}

export default function Overview({
  productId,
  listingId,
  orderId,
  status,
  buyer,
  listing,
  history,
  actions,
  buyerAddress,
}: Props) {
  const getMessage = useGetMessage();

  return (
    <div className="space-y-8">
      <div className="space-y-8 lg:flex lg:space-y-0">
        <div className="space-y-8 lg:w-2/3">
          <div className="flex">
            <div className="w-1/2">
              <h3 className="font-semibold">
                {getMessage(ids.listings.myListing.listing)}
              </h3>
              <Button
                component={Link}
                to={makeGameListingPath({ listingId, productId })}
                className="text-sm inline-flex"
                padding={false}
              >
                {listingId}
              </Button>
            </div>
            <If condition={orderId}>
              <div>
                <h3 className="font-semibold">
                  {getMessage(ids.listings.myListing.order)}
                </h3>
                <div className="text-sm">{orderId}</div>
              </div>
            </If>
          </div>
          <div className="flex">
            <div className="w-1/2">
              <Status status={status} />
            </div>
            <If condition={buyer}>
              <Buyer username={buyer} />
            </If>
          </div>
          <Suspense fallback={<Loader size="0.5rem" sensible />}>
            {buyerAddress}
          </Suspense>
          {actions}
        </div>
        <PriceBreakdown className="lg:w-1/3" listing={listing} />
      </div>
      {history}
    </div>
  );
}
