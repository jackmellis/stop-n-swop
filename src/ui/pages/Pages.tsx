import React from 'react';
import { Route } from 'react-router-dom';
import { HOME, PRODUCTS } from 'ui/constants/paths';
import HomePage from 'ui/pages/Home';
import ProductsPage from 'ui/pages/Products';

export default function Pages() {
  return (
    <>
      <Route path={HOME} exact>
        <HomePage />
      </Route>
      <Route path={PRODUCTS}>
        <ProductsPage />
      </Route>
    </>
  );
}
