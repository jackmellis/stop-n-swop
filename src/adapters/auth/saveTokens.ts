import jpex from 'jpex';
import type { SaveTokens } from 'ports/auth';
import type { Persist, Temp } from 'ports/io';

const saveTokens = (persist: Persist, temp: Temp): SaveTokens => async ({
  authToken,
  refreshToken,
}) => {
  await temp.set('authToken', authToken);
  await persist.set('refreshToken', refreshToken);
};

jpex.factory<SaveTokens>(saveTokens);
