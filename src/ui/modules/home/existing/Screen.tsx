import React, { ReactNode } from 'react';

export default function Screen({
  dash,
  search,
  suggested,
  popular,
  recentlyAdded,
}: {
  dash: ReactNode;
  search: ReactNode;
  suggested: ReactNode;
  popular: ReactNode;
  recentlyAdded: ReactNode;
}) {
  return (
    <div className="container mx-auto space-y-8 sm:py-8 pb-8">
      {dash}
      <div>{search}</div>
      <div className="space-y-8 lg:space-y-12">
        {suggested}
        {popular}
        {recentlyAdded}
      </div>
    </div>
  );
}
