import { useAction } from '@respite/action';
import { ChangeStatusKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { ChangeStatus } from 'core/orders';

export const useChangeStatus = encase((changeStatus: ChangeStatus) => () => {
  return useAction(ChangeStatusKey, changeStatus, []);
});
