import { QueryOptions, useQuery } from '@respite/query';
import { encase } from 'react-jpex';
import { TokensKey } from 'application/keys';
import type { GetTokens } from 'core/auth';

export const useTokens = encase(
  (getTokens: GetTokens) => (opts?: QueryOptions) => {
    return useQuery(TokensKey, getTokens, [], opts);
  },
);
