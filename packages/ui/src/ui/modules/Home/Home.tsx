import React from 'react';
import background from 'ui/assets/bg-1.jpg';
import { Button } from 'ui/elements/Button';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { ids } from 'ui/messages';

export default function Home() {
  return (
    <div className="flex-grow flex flex-col relative overflow-y-hidden">
      <div
        style={{
          backgroundImage: `url(${background})`,
          filter: 'grayscale(0) blur(5px) brightness(1)',
          zIndex: 0,
          top: -45,
        }}
        className="h-screen w-screen left-0 absolute bg-center pointer-events-none bg-cover"
      />
      <div className="flex-grow z-10 md:max-w-3/4 lg:max-w-1/2 xl:w-1/3 flex flex-col md:justify-center xl:justify-end md:mx-auto xl:mx-0">
        <div className="flex-grow md:flex-grow-0 space-y-12 xl:mb-40 xl:ml-40 bg-black p-10 bg-opacity-60 rounded">
          <h1 className="text-2xl">
            <FormattedMessage id={ids.home.title} />
          </h1>
          <p>
            <FormattedMessage id={ids.home.text} />
          </p>
          <div className="pt-12 sm:pt-4 xl:pt-0 text-lg space-x-6 flex justify-center lg:justify-start">
            <Button component={Link} to="/browse">
              <span>
                <FormattedMessage id={ids.home.browse} />
              </span>
            </Button>
            <Button component={Link} kind="secondary" to="/list">
              <span>
                <FormattedMessage id={ids.home.list} />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
