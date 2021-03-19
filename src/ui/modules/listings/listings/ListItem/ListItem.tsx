import React, { CSSProperties } from 'react';
import cx from 'classnames';
import { ListItem } from 'ui/elements/list';
import { Stats } from 'core/entity/listings';
import { ImageUrl } from 'core/types';
import { Status } from 'core/constants/listings';
import Image from './Image';
import SellerInfo from './SellerInfo';
import Statistics from './Stats';
import Actions from './Actions';

interface Props {
  productId: string;
  listingId: string;
  image: ImageUrl;
  style: CSSProperties;
  price: number;
  stats: Stats;
  rating: number;
  status: Status;
  location: string;
  onAddToBasket(): void;
}

export default function ListingsListItem({
  productId,
  listingId,
  image,
  style,
  price,
  stats,
  rating,
  status,
  location,
  onAddToBasket,
}: Props) {
  return (
    <ListItem style={style}>
      <div className={cx('flex space-x-4 w-full h-full')}>
        <Image image={image} />

        <div className="flex-grow flex flex-col md:flex-row overflow-x-hidden">
          <div className="flex flex-col flex-grow justify-between space-y-3 pt-6 md:pb-6">
            <SellerInfo username="sellerguy113" rating={rating} />
            <div className="hidden md:block text-xs italic text-gray-300">
              {location}
            </div>
            <Statistics stats={stats} />
          </div>
          <Actions
            productId={productId}
            listingId={listingId}
            status={status}
            price={price}
            onAddToBasket={onAddToBasket}
          />
        </div>
      </div>
    </ListItem>
  );
}
