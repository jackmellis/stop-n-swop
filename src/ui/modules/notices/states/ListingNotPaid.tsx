import React from 'react';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import type { Notice as INotice } from '@sns/contracts/notice';
import NoticeItem from '../NoticeItem';
import { Err } from '../icons';

// TODO: actions?

export default function ListingNotPaid({ notice }: { notice: INotice }) {
  const g = useGetMessage();

  return (
    <NoticeItem Icon={Err} viewed={notice.viewed}>
      <div>{g(ids.notices.states.listingNotPaid.title)}</div>
      <div className="text-sm font-light italic mt-1">
        {g(ids.notices.states.listingNotPaid.subtitle)}
      </div>
    </NoticeItem>
  );
}
