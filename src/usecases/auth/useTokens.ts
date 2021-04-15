import { QueryOptions, useQuery } from '@respite/query';
import type { GetTokens } from 'ports/auth';
import { encase } from 'react-jpex';
import { TokensKey } from 'usecases/keys';

export const useTokens = encase(
  (getTokens: GetTokens) => (opts?: QueryOptions) => {
    return useQuery(TokensKey, getTokens, [], opts);
  },
);
