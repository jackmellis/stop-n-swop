import React from 'react';
import banner from 'ui/assets/sc8e2l.jpg';
import cover from 'ui/assets/Super_Mario_64_Boxart.png';
import { useCascade } from 'ui/hooks';
import { ListingsList } from 'ui/modules/listings/listings';
import Overview from 'ui/modules/product/view/Overview';
import QuickActions from 'ui/modules/product/view/QuickActions';
import Filters from 'ui/modules/listings/browse/Filters';
import Listing from './ConnectedListing';

export default function View({
  productId,
  listingIds,
  favourite,
  toggleFavourite,
}: {
  productId: string;
  listingIds: string[];
  favourite: boolean;
  toggleFavourite(): void;
}) {
  const cascade = useCascade(10);

  return (
    <div className="xl:w-4/5 xl:mx-auto flex-grow flex flex-col">
      <Overview
        banner={banner}
        cover={cover}
        developer="Nintendo"
        publisher="Nintendo"
        name="Super Mario 64"
        releaseDate={new Date('1996-06-23')}
      />
      <QuickActions
        favourite={favourite}
        onFavouriteClick={toggleFavourite}
        onCollectClick={() => null}
      />
      <div className="flex flex-col lg:flex-row flex-grow lg:space-x-4">
        <Filters />
        <ListingsList>
          {listingIds.map((listingId, i) => (
            <Listing
              style={cascade(i)}
              productId={productId}
              listingId={listingId}
            />
          ))}
        </ListingsList>
      </div>
    </div>
  );
}
