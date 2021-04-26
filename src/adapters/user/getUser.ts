import type { User } from '@sns/contracts/user';
import jpex from 'jpex';
import type { AuthDriver } from 'ports/io';
import type { GetUser } from 'ports/user';

const getUser = (driver: AuthDriver): GetUser => async () => {
  const response = await driver<void, User>({
    url: '/api/users/my',
  });

  return response.data;
};

jpex.factory<GetUser>(getUser);
