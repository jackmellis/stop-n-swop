import React from 'react';
import { Condition, Region, Audit, Listing } from '@sns/contracts/listing';
import cartridge from 'ui/assets/s-l640.jpg';
import cartridge2 from 'ui/assets/cartridge-back.jpg';
import cartridge3 from 'ui/assets/Super_Mario_64_Boxart.png';
import { Order, Status } from '@sns/contracts/order';
import { useAuthGuard } from 'application/auth';
import MyListing from './MyListing';

const listing: Listing = {
  id: 'sm64_001',
  products: [
    {
      platformId: 'nintendo-64',
      productId: 'super_mario_64',
    },
  ],
  currency: 'GBP',
  postage: 0,
  description: '',
  location: 'London, UK',
  price: 50,
  rating: 3.5,
  stats: {
    boxed: false,
    condition: Condition.POOR,
    region: Region.PAL,
    instructions: false,
  },
  username: 'seller1337',
  images: {
    main: cartridge,
    'box-front': cartridge2,
    'box-back': cartridge3,
  },
  createdDate: new Date('2021-03-30'),
};
const order: Order = {
  listingId: listing.id,
  username: 'buyer1',
  status: Status.RECEIVED,
};
const audit: Audit = [
  {
    listingId: listing.id,
    date: new Date(),
    username: order.username,
    status: Status.CREATED,
  },
  {
    listingId: listing.id,
    date: new Date(),
    username: order.username,
    status: Status.SOLD,
  },
  {
    listingId: listing.id,
    date: new Date(),
    username: listing.username,
    status: Status.POSTED,
  },
  {
    listingId: listing.id,
    date: new Date(),
    username: order.username,
    status: Status.RECEIVED,
  },
];

export default function ConnectedMyListing() {
  useAuthGuard();

  return (
    <MyListing
      history={audit}
      listing={listing}
      order={order}
      productName="Super Mario 64"
    />
  );
}
