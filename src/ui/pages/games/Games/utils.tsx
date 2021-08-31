import { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryParam } from 'ui/hooks';

// Grab any initial values from the url query
export const useInitialValues = () => {
  const initialSearch = useQueryParam<string>('q', { default: '' });
  const initialPlatforms = useQueryParam<string[]>('platforms', {
    array: true,
  });
  const initialAvailable = useQueryParam('available', {
    default: false,
    bool: true,
  });
  const initialFavourites = useQueryParam('favourites', {
    default: false,
    bool: true,
  });
  const initialDevs = useQueryParam<string[]>('devs', { array: true });
  const initialPubs = useQueryParam<string[]>('pubs', { array: true });

  return {
    initialSearch,
    initialPlatforms,
    initialAvailable,
    initialFavourites,
    initialDevs,
    initialPubs,
  };
};

// If the url params change we want to update all of the state on the page
export const useResetParams = ({
  initialSearch,
  initialPlatforms,
  initialAvailable,
  initialFavourites,
  initialDevs,
  initialPubs,
  search,
  platformIds,
  available,
  latentSearch,
  favourites,
  devs,
  pubs,
  flush,
  setPage,
  setSearch,
  setPlatformIds,
  setAvailable,
  setFavourites,
  setDevs,
  setPubs,
}: {
  initialSearch: string;
  initialPlatforms: string[];
  initialAvailable: boolean;
  initialFavourites: boolean;
  initialDevs: string[];
  initialPubs: string[];
  search: string;
  platformIds: string[];
  available: boolean;
  latentSearch: string;
  favourites: boolean;
  devs: string[];
  pubs: string[];
  flush(): void;
  setPage(p: number): void;
  setSearch(s: string): void;
  setPlatformIds(p: string[]): void;
  setDevs(p: string[]): void;
  setPubs(p: string[]): void;
  setAvailable(b: boolean): void;
  setFavourites(b: boolean): void;
}) => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }
    // update the search criteria if the url params change
    if (
      initialSearch !== search ||
      initialPlatforms !== platformIds ||
      initialAvailable !== available ||
      initialFavourites !== favourites ||
      initialDevs !== devs ||
      initialPubs !== pubs
    ) {
      setPage(0);
      setSearch(initialSearch);
      setPlatformIds(initialPlatforms);
      setAvailable(initialAvailable);
      setFavourites(initialFavourites);
      setDevs(initialDevs);
      setPubs(initialPubs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPlatforms, initialSearch, initialAvailable, initialFavourites]);

  // if the url params are cleared we want to immediately flush the debounced search
  useEffect(() => {
    if (!search && latentSearch) {
      flush();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
};

// When the search criteria changes we want to update the url params
export const useSyncUrl = ({
  latentSearch,
  search,
  platformIds,
  available,
  favourites,
  devs,
  pubs,
}: {
  latentSearch: string;
  search: string;
  platformIds: string[];
  available: boolean;
  favourites: boolean;
  devs: string[];
  pubs: string[];
}) => {
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams('');
    if (latentSearch && latentSearch === search) {
      params.append('q', latentSearch);
    }
    if (platformIds.length) {
      platformIds.forEach((id) => {
        params.append('platforms', id);
      });
    }
    if (available) {
      params.append('available', 'true');
    }
    if (favourites) {
      params.append('favourites', 'true');
    }
    if (devs.length) {
      devs.forEach((id) => {
        params.append('devs', id);
      });
    }
    if (pubs.length) {
      pubs.forEach((id) => {
        params.append('pubs', id);
      });
    }

    history.replace({ search: params.toString() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, platformIds, latentSearch, available, favourites, devs, pubs]);
};
