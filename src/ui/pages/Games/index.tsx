import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { GAME, GAMES } from 'ui/constants/paths';

const BrowsePage = lazy(() => import('./Browse'));
const ViewPage = lazy(() => import('./View'));

export default function GamesPage() {
  return (
    <>
      <Route path={GAMES} exact>
        <BrowsePage />
      </Route>
      <Route path={GAME} exact>
        <ViewPage />
      </Route>
    </>
  );
}
