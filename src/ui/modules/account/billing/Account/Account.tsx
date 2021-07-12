import React, { ReactNode, useState } from 'react';
import { useSaveBankAccount } from 'application/payments';
import { hasAddress, hasDetails } from 'domain/selectors/user';
import type { Address, User } from '@sns/contracts/user';
import Submitted from './Submitted';
import Edit from './Edit';
import Incomplete from './Incomplete';

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
  user,
}: {
  title?: ReactNode;
  description: ReactNode;
  submitText: ReactNode;
  user: User;
  onSubmit?(): any;
}) {
  const [hasAccount, setHasAccount] = useState(() => !!user.hasAccount);
  const { action, error, status, reset } = useSaveBankAccount();

  const handleSubmit = async (values: Values) => {
    await action(values);
    setHasAccount(true);
    onSubmit?.();
  };

  if (!hasDetails(user) || !hasAddress(user)) {
    return <Incomplete title={title} />;
  }

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
