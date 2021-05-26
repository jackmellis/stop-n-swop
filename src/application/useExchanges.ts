import { useExchange } from '@respite/exchange';
import {
  LogInKey,
  TokensKey,
  AuthKey,
  LogOutKey,
  UserKey,
  UpdateUserKey,
  ListingsKey,
  CreateListingKey,
  MyListingsKey,
  ListingKey,
  ListingCountKey,
  ListingHistoryKey,
} from './keys';

export default function useExchanges() {
  useExchange(
    [
      [TokensKey, UserKey],
      [LogInKey, AuthKey, LogOutKey],
    ],
    [UserKey, UpdateUserKey],
    [
      [
        ListingsKey,
        ListingKey,
        MyListingsKey,
        ListingCountKey,
        ListingHistoryKey,
      ],
      CreateListingKey,
    ],
  );
}
