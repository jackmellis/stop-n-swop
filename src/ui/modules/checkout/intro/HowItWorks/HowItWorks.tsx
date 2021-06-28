import React, { useState } from 'react';
import Button from 'ui/elements/Button';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import Modal from 'ui/elements/Modal';
import Item from './Item';
import List from './List';

export default function HowItWorks() {
  const getMessage = useGetMessage();
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-4">
      <Button
        className="text-sm"
        kind="tertiary"
        padding={false}
        onClick={() => setShow(true)}
      >
        {getMessage(ids.checkout.intro.howItWorks.button)}
      </Button>
      <Modal
        isOpen={show}
        onClose={() => setShow(false)}
        title={getMessage(ids.checkout.intro.howItWorks.button)}
      >
        <List>
          {ids.checkout.intro.howItWorks.steps.map((ids, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Item key={i}>{ids.map((id) => getMessage(id))}</Item>
          ))}
        </List>
      </Modal>
    </div>
  );
}
