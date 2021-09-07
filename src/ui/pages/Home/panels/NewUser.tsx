import { useMyListings } from 'application/listings';
import { useMyOrders } from 'application/orders';
import React from 'react';
import { GAMES, makeDashboardPath, NEW_LISTING } from 'ui/constants/paths';
import { LinkButton } from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import Panel from 'ui/modules/home/existing/Panel';

export default function NewUserPanel() {
  const { data: listings } = useMyListings();
  const { data: orders } = useMyOrders();
  const g = useGetMessage();

  if (listings.length || orders.length) {
    return null;
  }

  return (
    <Panel
      className="sm:!w-2/3 lg:!w-1/2 xl:!w-1/3"
      title={g(ids.home.existing.newUser.title)}
      ctas={
        <div className="w-full space-y-4 md:space-y-0 lg:flex md:justify-around">
          <LinkButton
            padding
            kind="primary"
            style={{ minWidth: '25%' }}
            to={GAMES}
          >
            {g(ids.home.existing.newUser.buy)}
          </LinkButton>
          <LinkButton
            padding
            kind="secondary"
            style={{ minWidth: '25%' }}
            to={NEW_LISTING}
          >
            {g(ids.home.existing.newUser.sell)}
          </LinkButton>
          <LinkButton
            padding
            kind="tertiary"
            to={makeDashboardPath()}
            style={{ minWidth: '25%' }}
          >
            {g(ids.home.existing.newUser.settings)}
          </LinkButton>
        </div>
      }
    >
      {g(ids.home.existing.newUser.description)
        .split('\n')
        .map((part) => (
          <p>{part}</p>
        ))}
    </Panel>
  );
}
