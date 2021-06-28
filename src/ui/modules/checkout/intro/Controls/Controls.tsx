import React from 'react';
import { Link } from 'react-router-dom';
import { makeGameListingPath } from 'ui/constants/paths';
import Button from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';

export default function Controls({
  onClick,
  submitting,
  productId,
  listingId,
}: {
  onClick(): any;
  productId: string;
  listingId: string;
  submitting: boolean;
}) {
  const getMessage = useGetMessage();

  return (
    <div className="flex justify-around">
      <Button
        kind="tertiary"
        component={Link}
        to={makeGameListingPath({ listingId, productId })}
      >
        {getMessage(ids.checkout.intro.back)}
      </Button>
      <Button
        kind="primary"
        state={submitting ? 'pending' : 'none'}
        onClick={onClick}
      >
        {getMessage(ids.checkout.intro.next)}
      </Button>
    </div>
  );
}
