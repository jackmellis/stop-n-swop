import { useAction } from '@respite/action';
import { CreateListingKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { CreateListing } from 'core/listings';

export const useCreateListing = encase((create: CreateListing) => () => {
  return useAction(CreateListingKey, create, []);
});
