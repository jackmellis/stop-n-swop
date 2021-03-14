import React, { CSSProperties } from 'react';
import cx from 'classnames';
import { GridItem as ProductItem } from 'ui/modules/product/grid';
import Favourite from './Favourite';

interface Props {
  name: string;
  cover: string;
  platform: string;
  totalListings: number;
  style?: CSSProperties;
}

export default function Row({
  style,
  name,
  cover,
  platform,
  totalListings,
}: Props) {
  return (
    <ProductItem
      to={`/products/${name.replace(/ /g, '_')}`}
      name={name}
      image={cover}
      ctas={[<Favourite key="favourite" />]}
      style={style}
    >
      <div className="text-xs">{platform}</div>
      <div
        className={cx(
          'text-xs',
          totalListings > 0 ? 'text-green-50' : 'text-gray-500',
        )}
      >
        {totalListings} Available
      </div>
    </ProductItem>
  );
}
