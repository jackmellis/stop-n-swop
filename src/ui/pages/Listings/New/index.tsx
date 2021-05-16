import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import {
  NEW_LISTING,
  GAME_NEW_LISTING,
  NEW_LISTING_PLATFORM,
} from 'ui/constants/paths';
import NewListingGame from './NewListingGame';

const NewListing = lazy(() => import('./NewListing'));
const NewProductListingPage = lazy(() => import('./NewProductListing'));

export default function NewListingPages() {
  return (
    <>
      <Route path={NEW_LISTING} exact>
        <NewListing />
      </Route>
      <Route path={NEW_LISTING_PLATFORM} exact>
        <NewListingGame />
      </Route>
      <Route path={GAME_NEW_LISTING} exact>
        <NewProductListingPage />
      </Route>
    </>
  );
}
