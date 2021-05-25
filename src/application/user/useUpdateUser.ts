import { useAction } from '@respite/action';
import { encase } from 'react-jpex';
import { UpdateUserKey } from 'application/keys';
import type { UpdateUser } from 'core/user';

export const useUpdateUser = encase((update: UpdateUser) => () => {
  return useAction(UpdateUserKey, update, []);
});
