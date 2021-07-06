import React from 'react';
import { useMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import type { Notice as INotice } from '@sns/contracts/notice';
import NoticeItem from '../NoticeItem';
import { Success } from '../icons';

export default function OrderReceived({ notice }: { notice: INotice }) {
  return (
    <NoticeItem Icon={Success} viewed={notice.viewed}>
      {useMessage(ids.notices.states.orderReceived.title)}
    </NoticeItem>
  );
}
