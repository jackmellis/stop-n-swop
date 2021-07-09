import { useAction } from '@respite/action';
import { encase } from 'react-jpex';
import { UpdateUserKey } from 'application/keys';
import { useRefreshTokens } from 'application/auth/useRefreshTokens';
import type { UpdateUser } from 'core/user';

type Args = Parameters<UpdateUser>[0];

export const useUpdateUser = encase((update: UpdateUser) => () => {
  const { action: refreshTokens } = useRefreshTokens();

  return useAction(
    UpdateUserKey,
    async (args: Args) => {
      const result = await update(args);
      if (args.username) {
        await refreshTokens();
      }
      return result;
    },
    [],
  );
});
