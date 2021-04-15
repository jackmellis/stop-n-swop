import jpex from 'jpex';
import type { LogIn } from 'ports/auth';
import type { Driver } from 'ports/io';
import type { LoginRequest, LoginResponse } from '@sns/contracts/user';

const logIn = (driver: Driver): LogIn => async ({ password, username }) => {
  const response = await driver<LoginRequest, LoginResponse>({
    url: '/api/auth/sessions',
    method: 'POST',
    data: { password, username },
  });

  const {
    data: { authToken, refreshToken },
  } = response;

  return { authToken, refreshToken };
};

jpex.factory<LogIn>(logIn);
