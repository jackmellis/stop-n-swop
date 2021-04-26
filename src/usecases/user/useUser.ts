import { QueryOptions, useQuery } from '@respite/query';
import type { GetUser } from 'ports/user';
import { encase } from 'react-jpex';
import { UserKey } from 'usecases/keys';

export const useUser = encase((getUser: GetUser) => (opts?: QueryOptions) => {
  return useQuery(UserKey, getUser, [], opts);
});
