import React from 'react';
import Home from 'ui/pages/Home';
import { Provider as Intl } from 'ui/intl';
import { en } from 'ui/messages';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'modules / Home',
};

export const Basic = () => (
  <Intl messages={en}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Intl>
);
