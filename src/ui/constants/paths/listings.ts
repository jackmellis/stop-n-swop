import { GAME, makeGamePath } from './games';

export const MY_LISTINGS = '/my/listings';

export const MY_LISTING = '/my/listings/:listingId';
export const makeMyListingPath = ({ listingId }: { listingId: string }) =>
  `${MY_LISTINGS}/${encodeURIComponent(listingId)}`;

export const NEW_LISTING = '/list';

export const GAME_LISTING = `${GAME}/listings/:listingId`;
export const makeGameListingPath = ({
  productId,
  listingId,
}: {
  productId: string;
  listingId: string;
}) => `${makeGamePath({ productId })}/listings/${listingId}`;

export const EDIT_LISTING = `${MY_LISTING}/edit`;
export const makeEditListingPath = ({ listingId }: { listingId: string }) =>
  `${makeMyListingPath({ listingId })}/edit`;

export const GAME_NEW_LISTING = `${NEW_LISTING}/:productId`;
export const makeGameNewListingPath = ({ productId }: { productId: string }) =>
  `${NEW_LISTING}/${productId}`;
export const NEW_LISTING_COMPLETE = `${GAME_NEW_LISTING}/:listingId`;
export const makeNewListingCompletePath = ({
  productId,
  listingId,
}: {
  productId: string;
  listingId: string;
}) => {
  return `${makeGameNewListingPath({ productId })}/${listingId}`;
};
