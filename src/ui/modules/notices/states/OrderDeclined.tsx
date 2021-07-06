import React, { useState } from 'react';
import Button, { LinkButton } from 'ui/elements/Button';
import { makeMyOrderPath } from 'ui/constants/paths';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import OrderDeclinedModal from 'ui/modules/orders/my/order/OrderDeclinedModal';
import type { Notice as INotice } from '@sns/contracts/notice';
import NoticeItem from '../NoticeItem';
import { Err } from '../icons';

export default function OrderDeclined({
  notice,
  onClose,
}: {
  notice: INotice;
  onClose(): void;
}) {
  const getMessage = useGetMessage();
  const [showModal, setShowModal] = useState(false);

  return (
    <NoticeItem
      viewed={notice.viewed}
      Icon={Err}
      actions={
        <>
          <Button kind="tertiary" onClick={() => setShowModal(true)}>
            {getMessage(ids.notices.states.orderDeclined.why)}
          </Button>
          <OrderDeclinedModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
          <LinkButton
            kind="primary"
            to={makeMyOrderPath({ orderId: notice.data.orderId })}
            onClick={onClose}
            padding
          >
            {getMessage(ids.notices.states.orderDeclined.action)}
          </LinkButton>
        </>
      }
    >
      <span>{getMessage(ids.notices.states.orderDeclined.title)}</span>
    </NoticeItem>
  );
}
