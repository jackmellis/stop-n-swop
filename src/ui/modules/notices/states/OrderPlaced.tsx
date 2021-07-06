import React from 'react';
import { LinkButton } from 'ui/elements/Button';
import { makeMyListingPath } from 'ui/constants/paths';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import { useChangeStatus, useListingOrders } from 'application/orders';
import Submit from 'ui/elements/Submit';
import { Status } from '@sns/contracts/order';
import NoticeItem from '../NoticeItem';
import type { Notice as INotice } from '@sns/contracts/notice';

export default function OrderPlaced({
  notice,
  onClose,
}: {
  notice: INotice;
  onClose(): void;
}) {
  const getMessage = useGetMessage();
  const { data: orders } = useListingOrders({
    listingId: notice.data.listingId,
  });
  const { action: changeStatus, status } = useChangeStatus();
  const order = orders.find((order) => order.id === notice.data.orderId);

  const handleClick = () => {
    changeStatus({
      orderId: notice.data.orderId,
      status: Status.APPROVED,
    });
  };

  return (
    <NoticeItem
      viewed={notice.viewed}
      actions={
        <>
          <If condition={order?.status === Status.PLACED}>
            <Submit
              type="button"
              kind="secondary"
              status={status}
              onClick={handleClick}
            >
              {getMessage(ids.order.actions.approved)}
            </Submit>
          </If>
          <LinkButton
            kind="primary"
            padding
            to={makeMyListingPath({ listingId: notice.data.listingId })}
            onClick={onClose}
          >
            {getMessage(ids.notices.states.orderPlaced.action)}
          </LinkButton>
        </>
      }
    >
      <div>{getMessage(ids.notices.states.orderPlaced.title)}</div>
      <div className="text-sm font-light italic mt-1">
        {getMessage(ids.notices.states.orderPlaced.subtitle)}
      </div>
    </NoticeItem>
  );
}
