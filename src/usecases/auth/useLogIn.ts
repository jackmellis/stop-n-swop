import type { LogIn, SaveTokens } from 'ports/auth';
import { useAction } from '@respite/action';
import { encase } from 'react-jpex';
import { useCallback } from 'react';
import { LogInKey } from 'usecases/keys';

export const useLogIn = encase((logIn: LogIn, saveTokens: SaveTokens) => () => {
  const fn = useCallback(
    async ({ username, password }: { username: string; password: string }) => {
      const { authToken, refreshToken } = await logIn({ username, password });
      await saveTokens({ authToken, refreshToken });
    },
    [],
  );
  return useAction(LogInKey, fn);
});
