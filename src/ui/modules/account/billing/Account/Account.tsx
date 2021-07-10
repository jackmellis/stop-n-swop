import React, { ReactNode, useState } from 'react';
import { useUser } from 'application/user';
import { useSaveBankAccount } from 'application/payments';
import type { Address } from '@sns/contracts/user';
import Submitted from './Submitted';
import Edit from './Edit';

interface Values {
  sortCode: string;
  accountNumber: string;
  name: string;
  address: Address;
}

export default function Details({
  onSubmit,
  title,
  description,
  submitText,
}: {
  title?: ReactNode;
  description: ReactNode;
  submitText: ReactNode;
  onSubmit?(): any;
}) {
  const { data: user } = useUser();
  const [hasAccount, setHasAccount] = useState(() => !!user.hasAccount);
  const { action, error, status, reset } = useSaveBankAccount();

  const handleSubmit = async (values: Values) => {
    await action(values);
    setHasAccount(true);
    onSubmit?.();
  };

  if (hasAccount) {
    return <Submitted setHasAccount={setHasAccount} />;
  }

  return (
    <Edit
      description={description}
      error={error}
      reset={reset}
      setHasAccount={setHasAccount}
      status={status}
      title={title}
      user={user}
      submitText={submitText}
      onSubmit={handleSubmit}
    />
  );
}
