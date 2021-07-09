import { useHistory, useLocation } from 'react-router-dom';
import {
  makeLevelUpAddressPath,
  makeLeveLUpDetailsPath,
  makeLevelUpUsernamePath,
  makeLoginPath,
} from 'ui/constants/paths';
import { Reason } from 'domain/constants/auth';
import { useUser } from 'application/user';
import { never } from 'crosscutting/utils';
import { useIsLoggedIn } from './useIsLoggedIn';
import type { User } from '@sns/contracts/user';

const hasDetails = (user: User) => {
  return Boolean(
    user.firstName && user.lastName && user.dateOfBirth && user.nationality,
  );
};

export const useAuthGuard = ({
  username,
  address,
  details,
}: { username?: boolean; address?: boolean; details?: boolean } = {}) => {
  const loggedIn = useIsLoggedIn();
  const { pathname, search } = useLocation();
  const { replace } = useHistory();
  const userQuery = useUser();

  if (!loggedIn) {
    replace(makeLoginPath({ reason: Reason.LOGIN_REQUIRED, pathname, search }));
    throw never();
  }

  if (username && !userQuery.data.username) {
    replace(makeLevelUpUsernamePath({ pathname, search }));
    throw never();
  }
  if (details && !hasDetails(userQuery.data)) {
    replace(makeLeveLUpDetailsPath({ pathname, search }));
    throw never();
  }
  if (address && !userQuery.data.address.line1) {
    replace(makeLevelUpAddressPath({ pathname, search }));
    throw never();
  }
};
