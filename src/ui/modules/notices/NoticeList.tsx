import React, { Suspense } from 'react';
import { List } from 'ui/elements/list';
import { sortBy } from 'crosscutting/utils';
import type { Notice as INotice } from '@sns/contracts/notice';
import { getNoticeComponent } from './utils';

import Loader from '../Loader';
import NoticeItem from './NoticeItem';

export default function NoticeList({
  notices,
  onClose,
}: {
  notices: INotice[];
  onClose(): void;
}) {
  return (
    <List>
      {sortBy(notices, (notice) => notice.created, false).map((notice) => {
        const Notice = getNoticeComponent(notice);
        return (
          <Suspense
            key={`${notice.created}`}
            fallback={
              <NoticeItem viewed>
                <Loader />
              </NoticeItem>
            }
          >
            <Notice notice={notice} onClose={onClose} />
          </Suspense>
        );
      })}
    </List>
  );
}
