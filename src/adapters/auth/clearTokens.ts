import jpex from 'jpex';
import type { ClearTokens } from 'ports/auth';
import type { Persist, Temp } from 'ports/io';

const clearTokens = (persist: Persist, temp: Temp): ClearTokens => async () => {
  await temp.delete('authToken');
  await persist.delete('refreshToken');
};

jpex.factory<ClearTokens>(clearTokens);
