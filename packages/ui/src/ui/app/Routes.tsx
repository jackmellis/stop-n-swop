import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from 'ui/pages/HomePage';
import BrowsePage from 'ui/pages/BrowsePage';

export default function Routes() {
  return (
    <>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/browse" exact>
        <BrowsePage />
      </Route>
    </>
  );
}
