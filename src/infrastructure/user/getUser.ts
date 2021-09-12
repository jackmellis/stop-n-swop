import jpex from 'jpex';
import type { User } from '@sns/contracts/user';
import type { AuthDriver } from 'core/io';
import type { GetUser } from 'core/user';

const getUser =
  (driver: AuthDriver): GetUser =>
  async ({ username = 'my' } = {}) => {
    const response = await driver<void, User>({
      url: '/users/{username}',
      params: { username },
    });

    const user = response.data;

    return user;
  };

jpex.factory<GetUser>(getUser);
