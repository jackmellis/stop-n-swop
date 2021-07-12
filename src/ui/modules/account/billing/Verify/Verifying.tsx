import React from 'react';
import { FaIdCard } from 'react-icons/fa';
import Loader from 'react-spinners/ScaleLoader';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';

export default function Verifying() {
  const g = useGetMessage();

  return (
    <div className="space-y-8">
      <h3 className="text-lg font-bold flex space-x-4 items-center">
        <FaIdCard size="2em" className="text-secondary-lightest" />
        <span>{g(ids.account.billing.verify.title)}</span>
      </h3>
      <p className="text-center">
        {g(ids.account.billing.verify.verifying.description)}
      </p>
      <div className="flex justify-center">
        <Loader color="#fff" />
      </div>
      <p className="text-sm text-center italic">
        {g(ids.account.billing.verify.verifying.hint)}
      </p>
    </div>
  );
}
