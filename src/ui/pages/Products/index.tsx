import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { PRODUCT, PRODUCTS } from 'ui/constants/paths';

const BrowsePage = lazy(() => import('./Browse'));
const ViewPage = lazy(() => import('./View'));

export default function ProductsPage() {
  return (
    <>
      <Route path={PRODUCTS} exact>
        <BrowsePage />
      </Route>
      <Route path={PRODUCT} exact>
        <ViewPage />
      </Route>
    </>
  );
}
