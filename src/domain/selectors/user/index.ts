import type { User } from '@sns/contracts/user';

export const hasUsername = (user: User) => {
  return Boolean(user.username);
};

export const hasAddress = (user: User) => {
  return Boolean(user.address.line1);
};

export const hasDetails = (user: User) => {
  return Boolean(
    user.firstName && user.lastName && user.dateOfBirth && user.nationality,
  );
};
