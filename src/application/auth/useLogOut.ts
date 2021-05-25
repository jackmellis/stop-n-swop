import { useAction } from '@respite/action';
import { encase } from 'react-jpex';
import { LogOutKey } from 'application/keys';
import type { LogOut } from 'core/auth';

export const useLogOut = encase((logOut: LogOut) => () => {
  return useAction(LogOutKey, logOut, []);
});
