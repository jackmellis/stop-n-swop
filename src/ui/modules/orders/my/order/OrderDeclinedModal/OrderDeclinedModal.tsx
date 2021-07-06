import React from 'react';
import Modal from 'ui/elements/Modal';
import DeclinedHelp from 'ui/help/orders/declined-help.mdx';
import { useMessage } from 'ui/intl';
import { ids } from 'ui/messages';

export default function OrderDeclinedModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose(): void;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={useMessage(ids.order.declinedModal.title)}
    >
      <div className="help">
        <DeclinedHelp />
      </div>
    </Modal>
  );
}
