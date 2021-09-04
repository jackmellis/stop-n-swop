import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as Intl } from 'ui/intl';
import { en } from 'ui/messages';
import { Provider as Jpex } from 'react-jpex';
import type { Config } from 'core/io';
import CheckoutScreen from './Screen';
import type { Game } from '@sns/contracts/product';
import type { Listing } from '@sns/contracts/listing';
import Controls from '../Controls';
import HowItWorks from '../HowItWorks';
import Price from '../Price';

export default {
  title: 'modules / checkout / intro / Screen',
};

export const Basic = () => {
  const listing: Listing = {
    id: 'listing_id',
    price: 20000,
    postage: 200,
    currency: 'GBP',
    username: 'jb',
    images: {
      example:
        'http://www.boxmygames.com/wp-content/uploads/2015/07/Mario-Kart-64-2.jpg',
    },
  } as unknown as Listing;
  return (
    <Jpex
      onMount={(jpex) => {
        jpex.constant<Config>({
          images: {
            url: '',
          },
        } as any);
      }}
    >
      <Intl messages={en}>
        <BrowserRouter>
          <CheckoutScreen
            game={
              {
                name: 'Super Mario 64',
              } as Game
            }
            listing={listing}
            controls={<Controls onClick={() => null} submitting={false} />}
            howItWorks={<HowItWorks />}
            error={null}
            price={<Price listing={listing} openProtectionModal={() => null} />}
          />
        </BrowserRouter>
      </Intl>
    </Jpex>
  );
};
