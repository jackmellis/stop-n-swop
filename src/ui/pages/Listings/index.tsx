import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { EDIT_LISTING, PRODUCT_LISTING } from 'ui/constants/paths';
import NewListingPages from './New';
import MyListingsPages from './My';

const EditListingPage = lazy(() => import('./Edit'));
const ListingPage = lazy(() => import('./Listing'));

export default function ProductsPage() {
  return (
    <>
      <Route path={PRODUCT_LISTING} exact>
        <ListingPage />
      </Route>
      <Route path={EDIT_LISTING} exact>
        <EditListingPage />
      </Route>
      <NewListingPages />
      <MyListingsPages />
    </>
  );
}
