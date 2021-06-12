import type { Order, Status } from '@sns/contracts/order';

export type FetchMyOrders = () => Promise<Order[]>;

export type FetchListingOrders = (args: {
  listingId: string;
}) => Promise<Order[]>;

export type ChangeStatus = (args: {
  orderId: string;
  status: Status;
}) => Promise<void>;
