import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeGameListingPath } from 'ui/constants/paths';
import Button from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import { Status as OrderStatus } from '@sns/contracts/order';
import OrderDeclinedModal from 'ui/modules/orders/my/order/OrderDeclinedModal';
import { colorMatrix, iconMatrix } from 'ui/modules/listings/utils';
import type { Order } from '@sns/contracts/order';
import type { Listing } from '@sns/contracts/listing';

interface Props {
  order: Order;
  listing: Listing;
  history: ReactNode;
  actions: ReactNode;
}

export default function Overview({
  actions,
  history,
  listing: {
    id: listingId,
    productIds: [productId],
  },
  order: { id: orderId, status },
}: Props) {
  const getMessage = useGetMessage();
  const [showDeclinedModal, setShowDeclinedModal] = useState(false);
  const Icon = iconMatrix[status];
  const color = colorMatrix[status];

  return (
    <div className="space-y-8">
      <div className="space-y-8 lg:flex lg:space-y-0">
        <div className="lg:w-1/2">
          <h3 className="font-semibold">
            {getMessage(ids.order.myOrder.order)}
          </h3>
          <div className="text-sm">{orderId}</div>
        </div>
        <div>
          <h3 className="font-semibold">
            {getMessage(ids.order.myOrder.listing)}
          </h3>
          <Button
            component={Link}
            to={makeGameListingPath({
              listingId,
              productId,
            })}
            className="text-sm inline-flex"
            padding={false}
          >
            {listingId}
          </Button>
        </div>
      </div>
      <div className="space-y-8 lg:flex lg:space-y-0">
        <div className="lg:w-1/2">
          <h3 className="font-semibold">
            {getMessage(ids.listings.myListing.status.label)}
          </h3>
          <div className="text-sm flex items-center space-x-4">
            <span className={color}>
              <Icon size="1em" />
            </span>
            <Choose>
              <When condition={status === OrderStatus.DECLINED}>
                <Button
                  padding={false}
                  onClick={() => setShowDeclinedModal(true)}
                >
                  <span>
                    {getMessage(
                      ids.order.status[status] ?? ids.order.status.open,
                    )}
                  </span>
                </Button>
                <OrderDeclinedModal
                  isOpen={showDeclinedModal}
                  onClose={() => setShowDeclinedModal(false)}
                />
              </When>
              <Otherwise>
                <span>
                  {getMessage(
                    ids.order.status[status] ?? ids.order.status.open,
                  )}
                </span>
              </Otherwise>
            </Choose>
          </div>
        </div>
      </div>
      <div>{actions}</div>
      {history}
    </div>
  );
}
