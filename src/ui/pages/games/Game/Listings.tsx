import React from 'react';
import { useCascade } from 'ui/hooks';
import { ListingsList } from 'ui/modules/listings/listings';
import Listing from './Listing';
import type { Query } from '@respite/core';
import type { Listing as IListing } from '@sns/contracts/listing';
import type { User } from '@sns/contracts/user';

interface Props {
  user: User | null;
  listingsQuery: Query<IListing[]>;
}

export default function Listings({
  listingsQuery: { data: listings },
  user,
}: Props) {
  const cascade = useCascade(listings.length);

  return (
    <ListingsList>
      {listings.map((listing, i) => (
        <Listing
          key={listing.id}
          style={cascade(i)}
          listing={listing}
          owned={user?.username === listing.username}
        />
      ))}
    </ListingsList>
  );
}
