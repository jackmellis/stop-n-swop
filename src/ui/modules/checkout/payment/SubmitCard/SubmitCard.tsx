import { useAuthGuard } from 'application/auth';
import React from 'react';
import { useGetCurrency, useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import { FaLock } from 'react-icons/fa';
import Submit from 'ui/elements/Submit';
import { getFinalPrice, Listing } from '@sns/contracts/listing';
import type { Status } from '@respite/core';

export default function SubmitCard({
  listing,
  onSubmit,
  status,
}: {
  status: Status;
  listing: Listing;
  onSubmit(): any;
}) {
  useAuthGuard({
    username: true,
    details: true,
  });
  const g = useGetMessage();
  const getCurrency = useGetCurrency();

  return (
    <Submit
      type="button"
      className="w-full space-x-4"
      status={status}
      onClick={onSubmit}
    >
      <FaLock />
      <span>
        {g(ids.checkout.paymentNew.submit, {
          amount: getCurrency(getFinalPrice(listing), {
            currency: listing.currency,
          }),
        })}
      </span>
    </Submit>
  );
}
