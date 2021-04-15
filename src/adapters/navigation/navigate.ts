import jpex from 'jpex';
import type { Navigate } from 'ports/navigation';

const navigate = (window: Window): Navigate => (url) => {
  return new Promise(() => {
    const { location } = window;
    location.href = url;
  });
};

jpex.factory<Navigate>(navigate);
