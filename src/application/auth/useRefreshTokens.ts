import { useAction } from '@respite/action';
import { encase } from 'react-jpex';
import { AuthKey } from 'application/keys';
import type { RefreshTokens, SaveTokens } from 'core/auth';

export const useRefreshTokens = encase(
  (refreshTokens: RefreshTokens, saveTokens: SaveTokens) => () => {
    return useAction(
      AuthKey,
      async () => {
        const newTokens = await refreshTokens();
        await saveTokens(newTokens);
      },
      [],
    );
  },
);
