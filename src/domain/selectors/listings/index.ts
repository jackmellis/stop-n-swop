import {
  BASE_CHARGE_RATE,
  Listing,
  PROTECTION_RATE,
  SCALE_CHARGE_BASE_RATE,
  SCALE_CHARGE_LIMIT,
} from '@sns/contracts/listing';

// TODO: we should probably move these to contracts so FE and BE can use the same calculations

export const getBaseCost = (listing: Pick<Listing, 'price' | 'postage'>) => {
  return listing.price + listing.postage;
};

export const getProtectionCost = (listing: Pick<Listing, 'price'>) => {
  return listing.price * PROTECTION_RATE;
};

export const getTotalCost = (listing: Pick<Listing, 'price' | 'postage'>) => {
  return getBaseCost(listing) + getProtectionCost(listing);
};

export const getDisplayPrice = (
  listing: Pick<Listing, 'price' | 'postage'>,
) => {
  return listing.price + getProtectionCost(listing);
};

export const getChargeCost = (listing: Pick<Listing, 'price' | 'postage'>) => {
  const baseCost = getBaseCost(listing);
  const baseCharge = baseCost * BASE_CHARGE_RATE;
  const costLimit = baseCost / SCALE_CHARGE_LIMIT;
  const scaleRate = (1 - costLimit) * SCALE_CHARGE_BASE_RATE;
  const scaleCharge = scaleRate > 0 ? scaleRate * baseCost : 0;
  const totalCharge = baseCharge + scaleCharge;
  return totalCharge;
};

export const getListingProfit = (
  listing: Pick<Listing, 'price' | 'postage'>,
) => {
  return getBaseCost(listing) - getChargeCost(listing);
};
