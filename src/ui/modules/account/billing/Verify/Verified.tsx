import React from 'react';
import { FaCheckCircle, FaIdCard } from 'react-icons/fa';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import type { User } from '@sns/contracts/user';

export default function Verified({ user }: { user: User }) {
  const g = useGetMessage();

  return (
    <div className="space-y-8">
      <h3 className="text-lg font-bold flex space-x-4 items-center">
        <FaIdCard size="2em" className="text-primary-lightest" />
        <span>{g(ids.account.billing.verify.title)}</span>
      </h3>
      <p className="text-center">
        {g(ids.account.billing.verify.verified.description)}
      </p>
      <div className="flex justify-center">
        <FaCheckCircle className="text-primary-lightest" size="3em" />
      </div>
      <p className="text-center text-sm italic">
        <Choose>
          <When condition={user.hasAccount}>
            {g(ids.account.billing.verify.verified.complete)}
          </When>
          <Otherwise>
            {g(ids.account.billing.verify.verified.outstanding)}
          </Otherwise>
        </Choose>
      </p>
    </div>
  );
}
