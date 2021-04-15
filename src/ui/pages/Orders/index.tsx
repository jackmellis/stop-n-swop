import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { MY_ORDERS } from 'ui/constants/paths';

const MyOrdersPage = lazy(() => import('./My'));

export default function OrdersPage() {
  return (
    <>
      <Route path={MY_ORDERS} exact>
        <MyOrdersPage />
      </Route>
    </>
  );
}
