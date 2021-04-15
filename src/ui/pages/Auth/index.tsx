import React, { lazy } from 'react';
import { Route } from 'react-router-dom';
import { LOGIN, REGISTER } from 'ui/constants/paths';

const Login = lazy(() => import('./Login'));
const Register = lazy(() => import('./Register'));

export default function AuthPages() {
  return (
    <>
      <Route path={LOGIN} exact>
        <Login />
      </Route>
      <Route path={REGISTER} exact>
        <Register />
      </Route>
    </>
  );
}
