import React, { StrictMode, Suspense } from 'react';
import { Provider as Jpex } from 'react-jpex';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { en } from 'ui/messages';
import Content from '../layout/Content';
import Footer from '../layout/Footer';
import Nav from '../layout/Nav';
import ErrorPage from '../pages/ErrorPage';
import LoadingPage from '../pages/LoadingPage';

export default function App() {
  return (
    <StrictMode>
      <Jpex>
        <IntlProvider locale={navigator.language} messages={en}>
          <BrowserRouter>
            <Nav />
            <Content>
              <ErrorBoundary FallbackComponent={ErrorPage}>
                <Suspense fallback={<LoadingPage />}>
                  Page content here
                </Suspense>
              </ErrorBoundary>
            </Content>
            <Footer />
          </BrowserRouter>
        </IntlProvider>
      </Jpex>
    </StrictMode>
  );
}
