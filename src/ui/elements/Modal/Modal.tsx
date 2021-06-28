import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import Card from 'ui/elements/Card';
import { FaTimes } from 'react-icons/fa';

export default function Modal({
  isOpen = true,
  onClose,
  children,
  title,
}: {
  isOpen?: boolean;
  onClose?(): void;
  children: ReactNode;
  title: ReactNode;
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      appElement={document.getElementById('modal-container')}
      overlayClassName="fixed inset-0 bg-black bg-opacity-20"
      className="absolute inset-0 lg:inset-20 xl:inset-auto xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 xl:transform outline-none"
      onRequestClose={onClose}
      style={{ content: { fontSize: 20 } }}
    >
      <Card
        className="h-full overflow-y-auto border border-white"
        title={
          onClose ? (
            <>
              {title}
              <button type="button" onClick={onClose} title="close">
                <FaTimes />
              </button>
            </>
          ) : (
            title
          )
        }
      >
        {children}
      </Card>
    </ReactModal>
  );
}
