import { useQuery } from '@respite/query';
import { BalanceKey } from 'application/keys';
import { encase } from 'react-jpex';
import { STANDARD_TTL } from 'domain/constants';
import type { FetchBalance } from 'core/payments';

export const useBalance = encase((fetch: FetchBalance) => () => {
  return useQuery(BalanceKey, fetch, [], { ttl: STANDARD_TTL });
});
