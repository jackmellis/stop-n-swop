import { useAction } from '@respite/action';
import { ChangeListingStatusKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { ChangeListingStatus } from 'core/listings';

export const useChangeStatus = encase(
  (changeStatus: ChangeListingStatus) => () => {
    return useAction(ChangeListingStatusKey, changeStatus, []);
  },
);
