import { QueryOptions, useQuery } from '@respite/query';
import { NoticesKey } from 'application/keys';
import { encase } from 'react-jpex';
import type { FetchNotices } from 'core/notices';

export const useNotices = encase(
  (fetchNotices: FetchNotices) => (opts?: QueryOptions) => {
    return useQuery(NoticesKey, fetchNotices, [], {
      ttl: 60000,
      ...opts,
    });
  },
);
