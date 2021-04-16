import { useExchange } from '@respite/exchange';
import { LogInKey, TokensKey, AuthKey, LogOutKey } from './keys';

export default function useExchanges() {
  useExchange([TokensKey, [LogInKey, AuthKey, LogOutKey]]);
}
