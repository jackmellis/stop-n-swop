import React, { Suspense } from 'react';
import Screen from 'ui/modules/home/new/Screen';
import RecentlyAdded from './RecentlyAdded';
import Popular from './Popular';

export default function NewHome() {
  return (
    <Screen
      popular={
        <Suspense fallback={null}>
          <Popular />
        </Suspense>
      }
      recentlyAdded={
        <Suspense fallback={null}>
          <RecentlyAdded />
        </Suspense>
      }
    />
  );
}
