import { QueryOptions, useQuery } from '@respite/query';
import { encase } from 'react-jpex';
import { GameKey } from 'application/keys';
import type { FetchGame } from 'core/games';

type Args = Parameters<FetchGame>[0];

export const useGame = encase(
  (fetchGame: FetchGame) =>
    ({ id }: Args, opts?: QueryOptions) => {
      return useQuery(
        GameKey,
        () => {
          return fetchGame({ id });
        },
        [id],
        opts,
      );
    },
);
