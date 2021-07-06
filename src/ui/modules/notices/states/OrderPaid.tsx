import React from 'react';
import { LinkButton } from 'ui/elements/Button';
import { makeMyListingPath } from 'ui/constants/paths';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import type { Notice as INotice } from '@sns/contracts/notice';
import { Success } from '../icons';
import NoticeItem from '../NoticeItem';

export default function OrderPaid({
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
          to={makeMyListingPath({ listingId: notice.data.listingId })}
          onClick={onClose}
        >
          {getMessage(ids.notices.states.orderPaid.action)}
        </LinkButton>
      }
    >
      <div>{getMessage(ids.notices.states.orderPaid.title)}</div>
      <div className="text-sm font-light italic mt-1">
        {getMessage(ids.notices.states.orderPaid.subtitle)}
      </div>
    </NoticeItem>
  );
}
