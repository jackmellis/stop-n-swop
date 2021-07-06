import React from 'react';
import { useMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import type { Notice as INotice } from '@sns/contracts/notice';
import NoticeItem from '../NoticeItem';
import { Warn } from '../icons';

export default function OrderCancelled({ notice }: { notice: INotice }) {
  return (
    <NoticeItem viewed={notice.viewed} Icon={Warn}>
      <span>{useMessage(ids.notices.states.orderCancelled.title)}</span>
    </NoticeItem>
  );
}
