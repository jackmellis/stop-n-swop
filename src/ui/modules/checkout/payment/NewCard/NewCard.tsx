import React from 'react';
import { Link } from 'react-router-dom';
import { makeCheckoutPaymentNewPath } from 'ui/constants/paths';
import { useGetMessage } from 'ui/intl';
import { FaCreditCard } from 'react-icons/fa';
import { ids } from 'ui/messages';

export default function NewCard({ orderId }: { orderId: string }) {
  const g = useGetMessage();

  return (
    <Link
      to={makeCheckoutPaymentNewPath({ orderId })}
      className="flex items-center space-x-12 rounded-b-lg shadow-inner w-full py-4 px-8 bg-white text-black hover:text-gray-100 hover:bg-gray-400"
    >
      <span>
        <FaCreditCard size="2em" />
      </span>
      <span>{g(ids.checkout.payment.newCard)}</span>
    </Link>
  );
}
