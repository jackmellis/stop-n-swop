import React, { CSSProperties } from 'react';
import { ListingsItem } from 'ui/modules/listings/listings';
import { Status } from 'core/constants/listings';
import { Stats } from 'core/entity/listings';

interface Props {
  productId: string;
  listingId: string;
  status: Status;
  image: string;
  price: number;
  rating: number;
  location: string;
  stats: Stats;
  style: CSSProperties;
  onAddToBasket(): void;
}

export default function Listing({
  productId,
  listingId,
  style,
  image,
  location,
  onAddToBasket,
  price,
  rating,
  stats,
  status,
}: Props) {
  return (
    <ListingsItem
      productId={productId}
      listingId={listingId}
      status={status}
      onAddToBasket={onAddToBasket}
      image={image}
      price={price}
      rating={rating}
      location={location}
      stats={stats}
      style={style}
    />
  );
}
