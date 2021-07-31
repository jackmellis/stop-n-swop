import { useQuery } from '@respite/query';
import { TransactionsKey } from 'application/keys';
import { encase } from 'react-jpex';
import { STANDARD_TTL } from 'domain/constants';
import type { FetchTransactions } from 'core/payments';

export const useTransactions = encase((fetch: FetchTransactions) => () => {
  return useQuery(TransactionsKey, fetch, [], { ttl: STANDARD_TTL });
});
