import React from 'react';
import Closed from 'ui/help/listings/status/closed.mdx';
import Placed from 'ui/help/listings/status/placed.mdx';
import Approved from 'ui/help/listings/status/approved.mdx';
import Posted from 'ui/help/listings/status/posted.mdx';
import Disputed from 'ui/help/listings/status/disputed.mdx';
import NotReceived from 'ui/help/listings/status/notReceived.mdx';
import Verifying from 'ui/help/listings/status/verifying.mdx';
import { Status } from '@sns/contracts/order';

export default function Help({
  status,
  canApprove,
}: {
  status: Status;
  canApprove: boolean;
}) {
  switch (status) {
    case Status.VERIFYING:
      return <Verifying />;
    case Status.CLOSED:
      return <Closed />;
    case Status.PLACED:
      return (
        <If condition={canApprove}>
          <Placed />
        </If>
      );
    case Status.APPROVED:
      return <Approved />;
    case Status.POSTED:
      return <Posted />;
    case Status.DISPUTED:
      return <Disputed />;
    case Status.NOT_RECEIVED:
      return <NotReceived />;
    default:
      return null;
  }
}
