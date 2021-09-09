'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

exports.Condition = void 0;
(function (Condition) {
  Condition["MINT"] = "mint";
  Condition["LIKE_NEW"] = "likeNew";
  Condition["USED"] = "used";
  Condition["POOR"] = "poor";
})(exports.Condition || (exports.Condition = {}));
exports.Region = void 0;
(function (Region) {
  Region["PAL"] = "pal";
  Region["NTSCU"] = "ntscu";
  Region["NTSCC"] = "ntscc";
  Region["NTSCJ"] = "ntscj";
})(exports.Region || (exports.Region = {}));

const getBasePrice = listing => {
  return listing.price;
};
const getPostage = listing => {
  return listing.postage;
};
const getDiscount = listing => {
  let discount = 0;
  if (!listing.discount) {
    return discount;
  }
  const total = getListedPrice(listing);
  if (listing.discount.percentage) {
    const percDiscount = Math.floor(total * (listing.discount.percentage / 100));
    discount += percDiscount;
  }
  if (listing.discount.fixed) {
    discount += listing.discount.fixed;
  }
  return discount;
};
const getListedPrice = listing => {
  return getBasePrice(listing) + getPostage(listing);
};
const getRawProtectionCharge = listing => {
  return Math.ceil(getListedPrice(listing) * 0.04);
};
const getRawPlatformCharge = listing => {
  return Math.ceil(getListedPrice(listing) * 0.04) + 30;
};
const getProtectionCharge = listing => {
  const platformCharge = getRawPlatformCharge(listing);
  const fullDiscount = getDiscount(listing);
  const discount = Math.max(fullDiscount - platformCharge, 0);
  const protection = getRawProtectionCharge(listing);
  return Math.max(protection - discount, 0);
};
const getPlatformCharge = listing => {
  const charge = getRawPlatformCharge(listing);
  const discount = getDiscount(listing);
  return Math.max(charge - discount, 0);
};
const getFinalPrice = listing => {
  return getListedPrice(listing);
};
const getDisplayPrice = listing => {
  return getBasePrice(listing);
};
const getListingCharges = listing => {
  return getProtectionCharge(listing) + getPlatformCharge(listing);
};
const getListingProfit = listing => {
  return getListedPrice(listing) - getListingCharges(listing);
};
const getTotalCharges = listing => {
  return getListingCharges(listing);
};
const getProviderPayInCharge = listing => {
  return Math.ceil(getFinalPrice(listing) * 0.029) + 30;
};
const calculateProviderPayOutCharge = amount => {
  return Math.ceil(amount * 0.02);
};
const getProviderPayOutCharge = listing => {
  return calculateProviderPayOutCharge(getListingProfit(listing));
};
const getProviderCharges = listing => {
  return getProviderPayInCharge(listing) + getProviderPayOutCharge(listing);
};
const getProfit = listing => {
  return getTotalCharges(listing) - getProviderCharges(listing);
};

exports.calculateProviderPayOutCharge = calculateProviderPayOutCharge;
exports.getBasePrice = getBasePrice;
exports.getDiscount = getDiscount;
exports.getDisplayPrice = getDisplayPrice;
exports.getFinalPrice = getFinalPrice;
exports.getListedPrice = getListedPrice;
exports.getListingCharges = getListingCharges;
exports.getListingProfit = getListingProfit;
exports.getPlatformCharge = getPlatformCharge;
exports.getPostage = getPostage;
exports.getProfit = getProfit;
exports.getProtectionCharge = getProtectionCharge;
exports.getProviderCharges = getProviderCharges;
exports.getProviderPayInCharge = getProviderPayInCharge;
exports.getProviderPayOutCharge = getProviderPayOutCharge;
exports.getTotalCharges = getTotalCharges;
