import React, { ReactNode } from 'react';
import Card from 'ui/elements/Card';
import FormError from 'ui/elements/FormError';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import banner from 'ui/assets/powered-by-mangopay.png';

export default function PaymentScreen({
  error,
  cards,
  newCard,
  submitCard,
}: {
  error: any;
  cards: ReactNode;
  newCard: ReactNode;
  submitCard: ReactNode;
}) {
  const g = useGetMessage();

  return (
    <div className="flex-grow flex justify-center items-center">
      <Card
        title={g(ids.checkout.paymentNew.title)}
        className="max-w-screen-sm"
      >
        <div className="flex flex-col items-center">
          <div className="space-y-12 w-96">
            <If condition={error}>
              <FormError error={error} />
            </If>
            <div>{g(ids.checkout.payment.description)}</div>
            <div>
              {cards}
              {newCard}
            </div>
            {submitCard}
          </div>
        </div>
        <div className="mt-32">
          <img alt="Powered by MangoPay" src={banner} />
        </div>
      </Card>
    </div>
  );
}
