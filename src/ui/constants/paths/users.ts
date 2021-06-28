// USERS
export const USERS = '/users';
export const USER = '/users/:username';
export const makeUserPath = ({ username }: { username: string }) =>
  `${USERS}/${encodeURIComponent(username)}`;
