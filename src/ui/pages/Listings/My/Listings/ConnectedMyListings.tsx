import React from 'react';
import cartridge from 'ui/assets/s-l640.jpg';
import { Condition, Region, Listing as IListing } from '@sns/contracts/listing';
import { useAuthGuard } from 'application/auth';
import MyListings from './MyListings';

const listings: IListing[] = [
  {
    id: 'a',
    products: [
      {
        productId: 'super_mario_64',
        platformId: 'nintendo-64',
      },
    ],
    currency: 'GBP',
    postage: 0,
    description: "It's awesome",
    location: 'London, UK',
    price: 50,
    rating: 4,
    username: 'seller1337',
    stats: {
      boxed: true,
      instructions: true,
      condition: Condition.USED,
      region: Region.PAL,
    },
    images: { main: cartridge },
    createdDate: new Date(),
  },
  {
    id: 'b',
    products: [
      {
        productId: 'super_mario_64',
        platformId: 'nintendo-64',
      },
    ],
    currency: 'GBP',
    postage: 0,
    description: "It's awesome",
    location: 'London, UK',
    price: 50,
    rating: 4,
    username: 'seller1337',
    stats: {
      boxed: true,
      instructions: true,
      condition: Condition.USED,
      region: Region.PAL,
    },
    images: { main: cartridge },
    createdDate: new Date(),
  },
  {
    id: 'c',
    products: [
      {
        productId: 'super_mario_64',
        platformId: 'nintendo-64',
      },
    ],
    currency: 'GBP',
    postage: 0,
    description: "It's awesome",
    location: 'London, UK',
    price: 50,
    rating: 4,
    username: 'seller1337',
    stats: {
      boxed: true,
      instructions: true,
      condition: Condition.USED,
      region: Region.PAL,
    },
    images: { main: cartridge },
    createdDate: new Date(),
  },
];

export default function ConnectedMyListings() {
  useAuthGuard();

  return <MyListings listings={listings} />;
}
