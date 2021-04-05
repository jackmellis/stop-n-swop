import React from 'react';
import { Route } from 'react-router-dom';
import { EDIT_LISTING, PRODUCT_LISTING } from 'ui/constants/paths';
import ListingPage from './Listing';
import NewListingPages from './New';
import MyListingsPages from './My';
import EditListingPage from './Edit';

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
