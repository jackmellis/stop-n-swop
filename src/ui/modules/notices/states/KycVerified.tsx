import React from 'react';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import type { Notice as INotice } from '@sns/contracts/notice';
import NoticeItem from '../NoticeItem';
import { Success } from '../icons';

export default function KycVerified({ notice }: { notice: INotice }) {
  const getMessage = useGetMessage();

  return (
    <NoticeItem viewed={notice.viewed} Icon={Success}>
      <span>{getMessage(ids.notices.states.kycVerified.title)}</span>
    </NoticeItem>
  );
}
