import { useListing } from 'application/listings';
import { useMyOrder } from 'application/orders';
import React from 'react';
import { useParams } from 'react-router-dom';
import CompleteScreen from 'ui/modules/checkout/complete/Screen';

export default function Complete() {
  const { orderId } = useParams<{ orderId: string }>();
  const {
    data: { listingId },
  } = useMyOrder({ id: orderId });
  const { data: listing } = useListing({ id: listingId });
  const image = Object.values(listing.images)[0];

  return <CompleteScreen orderId={orderId} image={image} />;
}
