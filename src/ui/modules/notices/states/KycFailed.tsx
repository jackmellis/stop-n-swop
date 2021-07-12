import React from 'react';
import { LinkButton } from 'ui/elements/Button';
import { makeDashboardPath } from 'ui/constants/paths';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import type { Notice as INotice } from '@sns/contracts/notice';
import NoticeItem from '../NoticeItem';
import { Err } from '../icons';

export default function KycFailed({
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
      Icon={Err}
      actions={
        <LinkButton
          kind="primary"
          to={makeDashboardPath({ section: 'billing', subSection: 'verify' })}
          onClick={onClose}
          padding
        >
          {getMessage(ids.notices.states.kycFailed.action)}
        </LinkButton>
      }
    >
      <span>{getMessage(ids.notices.states.kycFailed.title)}</span>
    </NoticeItem>
  );
}
