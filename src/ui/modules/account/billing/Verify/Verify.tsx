import React from 'react';
import { KycStatus, User } from '@sns/contracts/user';
import { hasAddress, hasDetails } from 'domain/selectors/user';
import None from './None';
import Verifying from './Verifying';
import Verified from './Verified';
import Outdated from './Outdated';
import Failed from './Failed';
import type { Status } from '@respite/core';
import Incomplete from './Incomplete';

export default function Verify({
  user,
  error,
  status,
  onChange,
}: {
  user: User;
  error: any;
  status: Status;
  onChange(file: File): any;
}) {
  if (!hasAddress(user) || !hasDetails(user)) {
    return <Incomplete />;
  }

  switch (user.kycStatus) {
    case KycStatus.VERIFYING:
      return <Verifying />;
    case KycStatus.VERIFIED:
      return <Verified user={user} />;
    case KycStatus.OUTDATED:
      return <Outdated error={error} onChange={onChange} status={status} />;
    case KycStatus.FAILED:
      return <Failed error={error} onChange={onChange} status={status} />;
    case KycStatus.NONE:
    default:
      return <None error={error} onChange={onChange} status={status} />;
  }
}
