import React from 'react';
import { Route } from 'react-router-dom';
import { HOME } from 'ui/constants/paths';
import HomePage from './Home';
import GamesPages from './Games';
import ListingPages from './Listings';
import AuthPages from './Auth';
import OrdersPages from './Orders';
import AccountPages from './Account';

export default function Pages() {
  return (
    <>
      <Route path={HOME} exact>
        <HomePage />
      </Route>
      <GamesPages />
      <ListingPages />
      <AuthPages />
      <OrdersPages />
      <AccountPages />
    </>
  );
}
