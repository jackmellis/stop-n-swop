export const CHECKOUT = '/checkout/:listingId';
export const makeCheckoutPath = ({ listingId }: { listingId: string }) =>
  `/checkout/${listingId}`;

export const CHECKOUT_BILLING_ADDRESS = '/checkout/:orderId/billing';
export const makeCheckoutBillingAddressPath = ({
  orderId,
}: {
  orderId: string;
}) => `/checkout/${orderId}/billing`;
