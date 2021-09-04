import React from 'react';
import Button from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';

export default function Controls({
  onClick,
  submitting,
}: {
  onClick(): any;
  submitting: boolean;
}) {
  const getMessage = useGetMessage();

  return (
    <div className="flex justify-end">
      <Button
        kind="primary"
        state={submitting ? 'pending' : 'none'}
        onClick={onClick}
      >
        {getMessage(ids.checkout.intro.next)}
      </Button>
    </div>
  );
}
