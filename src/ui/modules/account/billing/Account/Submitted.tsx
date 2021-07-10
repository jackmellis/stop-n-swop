import React from 'react';
import { useIntl } from 'ui/intl';
import { ids } from 'ui/messages';
import { FaRegCheckCircle } from 'react-icons/fa';
import Button from 'ui/elements/Button';

export default function Submitted({
  setHasAccount,
}: {
  setHasAccount(v: boolean): void;
}) {
  const intl = useIntl();
  const getMessage = intl.message;

  return (
    <div className="space-y-8 py-8">
      <div className="flex justify-center">
        <FaRegCheckCircle size="4rem" className="text-white" />
      </div>
      <h3 className="text-lg font-bold text-center">
        <span>{getMessage(ids.account.billing.account.hasAccount.title)}</span>
      </h3>
      <p className="text-center">
        {getMessage(ids.account.billing.account.hasAccount.description)}
      </p>
      <p className="text-center">
        {getMessage(ids.account.billing.account.hasAccount.suggestion)}
      </p>
      <div className="flex justify-center">
        <Button kind="primary" onClick={() => setHasAccount(false)}>
          {getMessage(ids.account.billing.account.hasAccount.edit)}
        </Button>
      </div>
    </div>
  );
}
