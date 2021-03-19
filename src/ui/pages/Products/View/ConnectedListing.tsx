import React, { CSSProperties, useState } from 'react';
import cartridge from 'ui/assets/s-l640.jpg';
import { Condition, Region, Status } from 'core/constants/listings';
import { Listing as IListing } from 'core/entity/listings';
import Listing from './Listing';

interface Props {
  productId: string;
  listingId: string;
  style: CSSProperties;
}

export default function ConnectedListing({
  listingId,
  productId,
  style,
}: Props) {
  const [status, setStatus] = useState(Status.NONE);
  const handleAddToBasket = () => {
    setStatus(Status.ADDING_TO_BASKET);
    setTimeout(() => {
      setStatus(Status.IN_BASKET);
    }, 1000);
  };
  const listing: IListing = {
    productId,
    listingId,
    images: [cartridge],
    location: 'London, UK',
    price: 50,
    rating: 3.5,
    stats: {
      boxed: true,
      condition: Condition.GOOD,
      instructions: true,
      region: Region.PAL,
    },
  };

  return (
    <Listing
      productId={productId}
      listingId={listingId}
      image={listing.images[0]}
      location={listing.location}
      price={listing.price}
      rating={listing.rating}
      stats={listing.stats}
      style={style}
      status={status}
      onAddToBasket={handleAddToBasket}
    />
  );
}
