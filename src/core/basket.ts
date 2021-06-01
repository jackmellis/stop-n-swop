import type { Basket } from '@sns/contracts/basket';

export type FetchMyBasket = () => Promise<Basket | null>;
export type FetchLocalBasket = FetchMyBasket;
export type FetchRemoteBasket = FetchMyBasket;

export type AddToBasket = (args: { listingId: string }) => Promise<void>;
export type AddToLocalBasket = AddToBasket;
export type AddToRemoteBasket = AddToBasket;

export type ClearLocalBasket = () => Promise<void>;

export type TransferBasket = () => Promise<void>;
