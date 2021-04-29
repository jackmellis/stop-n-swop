// USERS
export const USERS = '/users';
export const USER = '/users/:userId';
export const makeUserPath = ({ userId }: { userId: string }) =>
  `${USERS}/${encodeURIComponent(userId)}`;
