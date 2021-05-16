export type FetchListingRequirements = (args: {
  productId: string;
  platformId: string;
}) => Promise<{
  images: Array<{ key: string; required: boolean }>;
}>;
