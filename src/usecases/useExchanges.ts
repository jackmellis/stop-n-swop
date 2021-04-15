import { useExchange } from '@respite/exchange';
import { LogInKey, TokensKey, AuthKey } from './keys';

export default function useExchanges() {
  useExchange([TokensKey, [LogInKey, AuthKey]]);
}
