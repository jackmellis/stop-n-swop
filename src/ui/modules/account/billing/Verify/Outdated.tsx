import React from 'react';
import { FaIdCard } from 'react-icons/fa';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import FormError from 'ui/elements/FormError';
import UploadId from './UploadId';
import type { Status } from '@respite/core';

export default function Outdated({
  error,
  onChange,
  status,
}: {
  error: any;
  onChange(file: File): any;
  status: Status;
}) {
  const g = useGetMessage();

  return (
    <div className="space-y-8">
      <h3 className="text-lg font-bold flex space-x-4 items-center">
        <FaIdCard size="2em" className="text-warning-lightest" />
        <span>{g(ids.account.billing.verify.title)}</span>
      </h3>
      <p>{g(ids.account.billing.verify.oudated.description)}</p>
      <p>{g(ids.account.billing.verify.oudated.action)}</p>
      <div>
        <FormError error={error} />
      </div>
      <div className="w-72 mx-auto">
        <UploadId onChange={onChange} status={status} />
      </div>
    </div>
  );
}
