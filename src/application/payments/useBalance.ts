import { useSelector } from '@respite/select';
import { useUser } from 'application/user';

export const useBalance = () => {
  return useSelector(useUser(), (user) => ({
    balance: user.balance,
    currency: user.currency,
  }));
};
