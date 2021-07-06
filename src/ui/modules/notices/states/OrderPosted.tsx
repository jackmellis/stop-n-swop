import React from 'react';
import { LinkButton } from 'ui/elements/Button';
import { FaEnvelope } from 'react-icons/fa';
import { makeMyOrderPath } from 'ui/constants/paths';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import type { Notice as INotice } from '@sns/contracts/notice';
import NoticeItem from '../NoticeItem';
import { Success } from '../icons';

export default function OrderPosted({
  notice,
  onClose,
}: {
  notice: INotice;
  onClose(): void;
}) {
  const getMessage = useGetMessage();

  return (
    <NoticeItem
      viewed={notice.viewed}
      Icon={Success}
      actions={
        <LinkButton
          kind="primary"
          padding
          to={makeMyOrderPath({ orderId: notice.data.orderId })}
          onClick={onClose}
        >
          {getMessage(ids.notices.states.orderPosted.action)}
        </LinkButton>
      }
    >
      <div className="flex space-x-4 items-center">
        <span>{getMessage(ids.notices.states.orderPosted.title)}</span>
        <span>
          <FaEnvelope className="text-warning-lightest" />
        </span>
      </div>
    </NoticeItem>
  );
}
