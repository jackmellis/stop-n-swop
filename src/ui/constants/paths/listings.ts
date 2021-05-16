import { GAME, makeGamePath } from './games';

export const MY_LISTINGS = '/my/listings';
export const VIEW_MY_LISTING = '/my/listings/:listingId';
export const makeViewMyListingPath = ({ listingId }: { listingId: string }) =>
  `${MY_LISTINGS}/${encodeURIComponent(listingId)}`;
export const NEW_LISTING = '/list';
export const NEW_LISTING_PLATFORM = '/list/:platformId';
export const makeNewListingPlatformPath = ({
  platformId,
}: {
  platformId: string;
}) => `${NEW_LISTING}/${platformId}`;
export const GAME_LISTING = `${GAME}/listings/:listingId`;
export const makeGameListingPath = ({
  productId,
  platformId,
  listingId,
}: {
  productId: string;
  platformId: string;
  listingId: string;
}) => `${makeGamePath({ platformId, productId })}/listings/${listingId}`;
export const EDIT_LISTING = `${GAME}/listings/:listingId/edit`;
export const makeEditListingPath = ({
  productId,
  platformId,
  listingId,
}: {
  productId: string;
  platformId: string;
  listingId: string;
}) => `${makeGameListingPath({ platformId, productId, listingId })}/edit`;
export const GAME_NEW_LISTING = `${NEW_LISTING_PLATFORM}/:productId`;
export const makeGameNewListingPath = ({
  platformId,
  productId,
}: {
  platformId: string;
  productId: string;
}) => `${makeNewListingPlatformPath({ platformId })}/${productId}`;
export const MY_ORDERS = '/my/orders';
