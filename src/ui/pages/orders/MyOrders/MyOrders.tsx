import React from 'react';
import { useMessage } from 'ui/intl';
import { List } from 'ui/elements/list';
import PageTitle from 'ui/elements/PageTitle';
import { ids } from 'ui/messages';
import { useAuthGuard } from 'application/auth';
import { useMyOrders } from 'application/orders';
import Card from 'ui/elements/Card';
import { sortBy } from 'crosscutting/utils';
import Order from './Order';

export default function MyOrders() {
  useAuthGuard();

  const { data: orders } = useMyOrders();

  return (
    <div>
      <PageTitle>{useMessage(ids.order.title)}</PageTitle>
      <div className="xl:w-4/5 xl:mx-auto mt-6">
        <Choose>
          <When condition={orders.length === 0}>
            <Card>
              <p>Looks like you haven't got any orders yet</p>
            </Card>
          </When>
          <Otherwise>
            <List>
              {sortBy(orders, (order) => order.created, false).map((order) => (
                <Order order={order} />
              ))}
            </List>
          </Otherwise>
        </Choose>
      </div>
    </div>
  );
}
