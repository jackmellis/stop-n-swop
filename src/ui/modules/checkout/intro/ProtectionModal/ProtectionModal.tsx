import React from 'react';
import Modal from 'ui/elements/Modal';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';

export default function ProtectionModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose(): void;
}) {
  const getMessage = useGetMessage();

  return (
    <Modal
      isOpen={isOpen}
      title={getMessage(ids.checkout.intro.protectionGuide.title)}
      onClose={onClose}
    >
      <div className="space-y-8">
        {ids.checkout.intro.protectionGuide.steps.map((id, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={i}>{getMessage(id)}</p>
        ))}
      </div>
    </Modal>
  );
}
