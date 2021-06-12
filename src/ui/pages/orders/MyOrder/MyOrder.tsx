import { useAuthGuard } from 'application/auth';
import { useGame } from 'application/games';
import { useHistory, useListing } from 'application/listings';
import { useChangeStatus, useMyOrder } from 'application/orders';
import React from 'react';
import { useParams } from 'react-router-dom';
import Card from 'ui/elements/Card';
import FormError from 'ui/elements/FormError';
import PageTitle from 'ui/elements/PageTitle';
import History from 'ui/modules/listings/my/listing/History';
import Actions from 'ui/modules/orders/my/order/Actions';
import Overview from 'ui/modules/orders/my/order/Overview/Overview';

export default function MyOrder() {
  useAuthGuard();
  const { orderId } = useParams<{ orderId: string }>();
  const { data: order } = useMyOrder({ id: orderId });
  const { data: listing } = useListing({ id: order.listingId });
  const { data: game } = useGame({ id: listing.products[0].productId });
  const { data: history } = useHistory({ listingId: listing.id });
  const {
    action: changeStatus,
    status: actionStatus,
    error,
  } = useChangeStatus();

  const { username, createdDate } = listing;

  return (
    <div>
      <PageTitle>{game.name}</PageTitle>
      <Card className="md:mt-3 lg:mt-4 xl:mg-8 xl:w-4/5 xl:mx-auto flex flex-col">
        <If condition={error}>
          <FormError error={error} />
        </If>
        <Overview
          listing={listing}
          order={order}
          actions={
            <Actions
              order={order}
              status={actionStatus}
              onClick={(status) =>
                changeStatus({
                  orderId,
                  status,
                })
              }
            />
          }
          history={
            <History
              username={username}
              createdDate={createdDate}
              history={history}
            />
          }
        />
      </Card>
    </div>
  );
}
