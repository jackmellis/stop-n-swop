import React, { CSSProperties } from 'react';
import { ListingsItem, Actions } from 'ui/modules/listings/listings';
import type { Listing as IListing } from '@sns/contracts/listing';

interface Props {
  listing: IListing;
  style: CSSProperties;
}

export default function Listing({
  listing: {
    products: [{ productId, platformId }],
    id: listingId,
    username,
    images,
    location,
    price,
    rating,
    stats,
    postage,
    currency,
  },
  style,
}: Props) {
  return (
    <ListingsItem
      username={username}
      image={Object.values(images)[0]}
      rating={rating}
      location={location}
      stats={stats}
      style={style}
    >
      <Actions
        listingId={listingId}
        price={price}
        productId={productId}
        platformId={platformId}
        currency={currency}
        postage={postage}
      />
    </ListingsItem>
  );
}
