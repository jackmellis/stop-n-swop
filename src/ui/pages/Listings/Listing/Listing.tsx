import React from 'react';
import Slideshow from 'ui/elements/Slideshow';
import Overview from 'ui/modules/listings/listing/Overview';
import Features from 'ui/modules/listings/listing/Features';
import Card from 'ui/elements/Card';
import PageTitle from 'ui/elements/PageTitle';
import type { Stats } from '@sns/contracts/listing';

export default function ListingPage({
  productId,
  listingId,
  images,
  description,
  location,
  productName,
  username,
  stats,
  rating,
  price,
  postage,
  currency,
}: {
  productId: string;
  listingId: string;
  images: Record<string, string>;
  description: string;
  location: string;
  productName: string;
  username: string;
  stats: Stats;
  rating: number;
  price: number;
  postage: number;
  currency: string;
}) {
  const listingText = `(${listingId})`;

  return (
    <div>
      <PageTitle>
        <span className="pr-6">{productName}</span>
        <span className="text-xs text-gray-500">{listingText}</span>
      </PageTitle>
      <Card className="md:mt-3 lg:mt-4 xl:mt-8 xl:w-4/5 xl:mx-auto flex flex-col lg:p-8 xl:pt-12 xl:px-0 xl:pb-0">
        <div className="lg:flex">
          <Slideshow images={Object.values(images)} className="lg:w-1/2 mb-4" />
          <Overview
            productId={productId}
            listingId={listingId}
            className="space-y-8 lg:w-1/2 xl:w-auto"
            description={description}
            location={location}
            username={username}
            rating={rating}
            currency={currency}
            postage={postage}
            price={price}
          />
        </div>
        <Features stats={stats} />
      </Card>
    </div>
  );
}
