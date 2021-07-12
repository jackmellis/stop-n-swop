import React from 'react';
import { FaIdCard } from 'react-icons/fa';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import { LinkButton } from 'ui/elements/Button';
import { makeDashboardPath } from 'ui/constants/paths';

export default function Incomplete() {
  const g = useGetMessage();

  return (
    <div className="space-y-8">
      <h3 className="text-lg font-bold flex space-x-4 items-center">
        <FaIdCard size="2em" />
        <span>{g(ids.account.billing.verify.title)}</span>
      </h3>
      <p>{g(ids.account.billing.verify.incomplete.description)}</p>
      <div className="flex justify-around">
        <LinkButton
          kind="primary"
          padding
          to={makeDashboardPath({ section: 'about-me', subSection: 'details' })}
        >
          {g(ids.account.billing.verify.incomplete.details)}
        </LinkButton>
        <LinkButton
          kind="secondary"
          padding
          to={makeDashboardPath({ section: 'about-me', subSection: 'address' })}
        >
          {g(ids.account.billing.verify.incomplete.address)}
        </LinkButton>
      </div>
    </div>
  );
}
