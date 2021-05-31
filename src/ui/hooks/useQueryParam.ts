import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default function useQueryParam<R = string>(
  key: string,
  {
    default: fallback,
    array,
    bool,
  }: { default?: R; array?: boolean; bool?: boolean } = {},
) {
  const { search } = useLocation();
  return useMemo(() => {
    const params = new URLSearchParams(search);
    let result: any = array ? params.getAll(key) : params.get(key);
    if (bool) {
      switch (result) {
        case 'true':
          result = true;
          break;
        case 'false':
          result = false;
          break;
        default:
          result = undefined;
          break;
      }
    }
    return (result as R) ?? fallback;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
}
