import { CardsKey } from 'application/keys';
import { encase } from 'react-jpex';
import { QueryOptions, useQuery } from '@respite/query';
import type { FetchCards } from 'core/payments';

export const useCards = encase(
  (fetchCards: FetchCards) => (opts?: QueryOptions) => {
    return useQuery(CardsKey, fetchCards, [], opts);
  },
);
