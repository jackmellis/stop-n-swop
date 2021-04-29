export const HOME = '/';

// GAMES
export const GAMES = '/games';
export const GAME = '/games/:productId';
export const makeGamePath = ({ productId }: { productId: string }) =>
  `${GAMES}/${encodeURIComponent(productId)}`;

// COLLECTIONS
export const MY_COLLECTIONS = '/my/collections';

// LISTINGS
export const MY_LISTINGS = '/my/listings';
export const VIEW_MY_LISTING = '/my/listings/:listingId';
export const makeViewMyListingPath = ({ listingId }: { listingId: string }) =>
  `${MY_LISTINGS}/${encodeURIComponent(listingId)}`;
export const NEW_LISTING = '/list';
export const GAME_LISTING = `/games/:productId/listings/:listingId`;
export const makeGameListingPath = ({
  productId,
  listingId,
}: {
  productId: string;
  listingId: string;
}) => `${makeGamePath({ productId })}/listings/${listingId}`;
export const EDIT_LISTING = '/games/:productId/listings/:listingId/edit';
export const makeEditListingPath = ({
  productId,
  listingId,
}: {
  productId: string;
  listingId: string;
}) => `${makeGameListingPath({ productId, listingId })}/edit`;
export const GAME_NEW_LISTING = '/games/:productId/list';
export const makeGameNewListingPath = ({ productId }: { productId: string }) =>
  `${makeGamePath({ productId })}/list`;
export const MY_ORDERS = '/my/orders';

// Account dashboard
export const DASHBOARD = '/my/dashboard/:section?/:subSection?';
export const makeDashboardPath = ({
  section,
  subSection,
}: { section?: string; subSection?: string } = {}) => {
  if (subSection && section) {
    return `/my/dashboard/${encodeURIComponent(section)}/${encodeURIComponent(
      subSection,
    )}`;
  }
  if (section) {
    return `/my/dashboard/${encodeURIComponent(section)}`;
  }
  return '/my/dashboard';
};

// USERS
export const USERS = '/users';
export const USER = '/users/:userId';
export const makeUserPath = ({ userId }: { userId: string }) =>
  `${USERS}/${encodeURIComponent(userId)}`;

// CHECKOUT
export const CHECKOUT = '/checkout';

// AUTH
export const LOGIN = '/login';
export const LOGOUT = '/logout';
