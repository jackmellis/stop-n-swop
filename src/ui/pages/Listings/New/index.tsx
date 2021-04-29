import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { NEW_LISTING, GAME_NEW_LISTING } from 'ui/constants/paths';

const NewListing = lazy(() => import('./NewListing'));
const NewProductListingPage = lazy(() => import('./NewProductListing'));

export default function NewListingPages() {
  return (
    <>
      <Route path={NEW_LISTING} exact>
        <NewListing />
      </Route>
      <Route path={GAME_NEW_LISTING} exact>
        <NewProductListingPage />
      </Route>
    </>
  );
}
