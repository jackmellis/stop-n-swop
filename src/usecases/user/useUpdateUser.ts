import { useAction } from '@respite/action';
import type { UpdateUser } from 'ports/user';
import { encase } from 'react-jpex';
import { UpdateUserKey } from 'usecases/keys';

export const useUpdateUser = encase((update: UpdateUser) => () => {
  return useAction(UpdateUserKey, update, []);
});
