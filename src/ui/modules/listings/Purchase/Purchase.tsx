import React from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import { useGetMessage } from 'ui/intl';
import Button from 'ui/elements/Button';
import { ids } from 'ui/messages';
import { Status } from '@sns/contracts/order';
import { makeCheckoutPath } from 'ui/constants/paths';
import { Link } from 'react-router-dom';

const getButtonStatus = ({
  owned,
  listingStatus,
}: Pick<Props, 'owned' | 'listingStatus'>) => {
  if (owned) {
    return 'disabled';
  }
  if (listingStatus !== Status.OPEN) {
    return 'disabled';
  }
  return 'none';
};

const getTitle = ({
  owned,
  listingStatus,
}: Pick<Props, 'owned' | 'listingStatus'>) => {
  if (owned) {
    return 'You own this listing';
  }
  if (listingStatus !== Status.OPEN) {
    return 'This listing is no longer available';
  }
  return undefined;
};

interface Props {
  listingId: string;
  owned: boolean;
  listingStatus: Status;
  className?: string;
}

export default function Purchase({
  listingId,
  listingStatus,
  owned,
  className,
}: Props) {
  const getMessage = useGetMessage();
  const state = getButtonStatus({ listingStatus, owned });
  const title = getTitle({ listingStatus, owned });

  if (state === 'disabled') {
    return null;
  }

  return (
    <Button
      kind="primary"
      className={className}
      state={state}
      component={Link}
      to={makeCheckoutPath({ listingId })}
      title={title}
    >
      <FaShoppingBasket className="hidden md:block mr-3" />
      <span className="flex-shrink-0">
        {getMessage(ids.listings.listing.purchase)}
      </span>
    </Button>
  );
}
