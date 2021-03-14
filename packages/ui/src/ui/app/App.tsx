import React, { Suspense } from 'react';
import { Provider as Jpex } from 'react-jpex';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { en } from 'ui/messages';
import background from 'ui/assets/bg-1.jpg';
import Content from './Content';
import Footer from './Footer';
import Nav from './Nav';
import ErrorPage from '../pages/ErrorPage';
import LoadingPage from '../pages/LoadingPage';
import Routes from './Routes';

// TODO: get this
// https://www.dreamstime.com/taipei-taiwan-february-studio-shot-pile-different-nintendo-games-shot-above-large-pile-retro-nintendo-games-image113236003#_

export default function App() {
  return (
    <>
      <Jpex>
        <IntlProvider locale={navigator.language} messages={en}>
          <BrowserRouter basename="/">
            <div
              className="flex-grow flex flex-col text-white bg-gray-900 font-display"
              style={{ zIndex: 0, fontSize: 20 }}
            >
              <div
                style={{
                  backgroundImage: `url(${background})`,
                  filter: 'grayscale(1) blur(2px) brightness(0.5)',
                  zIndex: 0,
                }}
                className="h-screen w-screen top-0 left-0 fixed bg-center pointer-events-none bg-cover"
              />
              <div className="relative flex-grow flex flex-col">
                <Nav />
                <Content>
                  <ErrorBoundary FallbackComponent={ErrorPage}>
                    <Suspense fallback={<LoadingPage />}>
                      <Routes />
                    </Suspense>
                  </ErrorBoundary>
                </Content>
                <Footer />
              </div>
            </div>
          </BrowserRouter>
        </IntlProvider>
      </Jpex>
    </>
  );
}
