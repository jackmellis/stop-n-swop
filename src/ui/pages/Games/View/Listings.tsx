import React from 'react';
import { useCascade } from 'ui/hooks';
import { ListingsList } from 'ui/modules/listings/listings';
import Listing from './Listing';
import type { Query } from '@respite/core';
import type { Listing as IListing } from '@sns/contracts/listing';

interface Props {
  listingsQuery: Query<IListing[]>;
}

export default function Listings({ listingsQuery: { data: listings } }: Props) {
  const cascade = useCascade(listings.length);

  return (
    <ListingsList>
      {listings.map((listing, i) => (
        <Listing key={listing.id} style={cascade(i)} listing={listing} />
      ))}
    </ListingsList>
  );
}
