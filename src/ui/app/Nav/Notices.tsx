import React, { useEffect, useState } from 'react';
import Modal from 'ui/elements/Modal';
import { useMarkAsRead, useNotices } from 'application/notices';
import Bell from 'ui/modules/notices/Bell';
import NoticeList from 'ui/modules/notices/NoticeList';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import type { Notice } from '@sns/contracts/notice';

const useReadNotices = (open: boolean, notices: Notice[]) => {
  const { action: markAsRead } = useMarkAsRead();

  const hasUnread = notices.some((notice) => notice.viewed === false);

  useEffect(() => {
    const handle = setTimeout(() => {
      if (open && hasUnread) {
        markAsRead();
      }
    }, 2000);
    return () => clearTimeout(handle);
  }, [markAsRead, open, hasUnread]);
};

export default function Notices() {
  const [open, setOpen] = useState(false);
  const { data: notices } = useNotices();
  const hasNotifications = notices.length > 0;
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);
  const g = useGetMessage();

  useReadNotices(open, notices);

  return (
    <If condition={hasNotifications}>
      <li>
        <Bell open={open} onOpen={onOpen} notices={notices} />
        <Modal title={g(ids.notices.title)} isOpen={open} onClose={onClose}>
          <NoticeList notices={notices} onClose={onClose} />
        </Modal>
      </li>
    </If>
  );
}
