import { Status as ActionStatus } from '@respite/core';
import { Order, Status as OrderStatus } from '@sns/contracts/order';
import React from 'react';
import { en } from 'ui/messages';
import { Provider as Intl } from 'ui/intl';
import { BrowserRouter } from 'react-router-dom';
import addDays from 'date-fns/addDays';
import Actions from './Actions';

export default {
  title: 'modules / orders / my / order / Actions',
  argTypes: {
    orderStatus: {
      control: 'select',
      options: Object.values(OrderStatus),
    },
    actionStatus: {
      control: 'select',
      options: Object.values(ActionStatus),
    },
  },
};

interface BasicArgs {
  actionStatus: ActionStatus;
  orderStatus: OrderStatus;
  old: boolean;
}
const args: BasicArgs = {
  actionStatus: ActionStatus.IDLE,
  orderStatus: OrderStatus.CREATED,
  old: false,
};

export const Basic = ({ actionStatus, orderStatus, old }: BasicArgs) => {
  return (
    <Intl messages={en}>
      <BrowserRouter>
        <Actions
          status={actionStatus}
          order={
            {
              id: 'order-id',
              status: orderStatus,
              postedDate: addDays(new Date(), old ? -7 : -2),
            } as Order
          }
          onClick={alert}
        />
      </BrowserRouter>
    </Intl>
  );
};
Basic.args = args;
