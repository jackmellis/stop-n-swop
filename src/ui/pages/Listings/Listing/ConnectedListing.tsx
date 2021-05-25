import React from 'react';
import { useParams } from 'react-router-dom';
import { useListing } from 'application/listings';
import { useGame } from 'application/games';
import Listing from './Listing';

export default function ConnectedListingPage() {
  const { listingId, productId } =
    useParams<{
      productId: string;
      listingId: string;
      platformId: string;
    }>();

  const { data: listing } = useListing({ id: listingId });
  const { data: product } = useGame({ id: productId });

  return (
    <Listing
      productId={productId}
      listingId={listingId}
      description={listing.description}
      images={listing.images}
      location={listing.location}
      productName={product.name}
      stats={listing.stats}
      username={listing.username}
      rating={listing.rating}
      currency={listing.currency}
      postage={listing.postage}
      price={listing.price}
    />
  );
}
