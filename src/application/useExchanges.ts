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
  AddToBasketKey,
  BasketKey,
  UpdateListingKey,
  MyOrdersKey,
  SubmitBasketKey,
  ListingOrdersKey,
  ChangeStatusKey,
} from './keys';

export default function useExchanges() {
  useExchange(
    [
      [TokensKey, UserKey, BasketKey],
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
      [CreateListingKey, UpdateListingKey],
    ],
    [BasketKey, AddToBasketKey],
    [
      [
        MyOrdersKey,
        ListingOrdersKey,
        BasketKey,
        ListingsKey,
        ListingKey,
        ListingCountKey,
        ListingHistoryKey,
      ],
      SubmitBasketKey,
    ],
    [
      [
        ListingsKey,
        ListingKey,
        MyListingsKey,
        ListingCountKey,
        ListingHistoryKey,
        MyOrdersKey,
        ListingOrdersKey,
      ],
      ChangeStatusKey,
    ],
  );
}
