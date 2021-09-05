import React, { useState } from 'react';
import { Order, Status } from '@sns/contracts/order';
import Button, { LinkButton } from 'ui/elements/Button';
import { Link } from 'react-router-dom';
import { makeEditListingPath, NEW_LISTING } from 'ui/constants/paths';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import { FaEnvelope, FaPen, FaTimes } from 'react-icons/fa';
import cx from 'classnames';
import Modal from 'ui/elements/Modal';
import type { Status as RStatus } from '@respite/core';
import type { Listing } from '@sns/contracts/listing';
import ActionButton from './ActionButton';
import MultiOrders from './MultiOrders';
import type { User } from '@sns/contracts/user';

interface Props {
  listing: Listing;
  orders: Order[];
  user: User;
  status: RStatus;
  onChangeStatus(args: { orderId: string; status: Status }): void;
}

const wrapperClass =
  'space-y-2 sm:space-y-4 md:space-y-0 max-w-screen-xs mx-auto md:max-w-none md:flex md:space-x-4 lg:space-x-8';

export default function Actions({
  listing,
  orders,
  user,
  status,
  onChangeStatus,
}: Props) {
  const [showPostedModal, setShowPostedModal] = useState(false);
  const [active, setActive] = useState<{ orderId: string; status: Status }>({
    orderId: '',
    status: Status.OPEN,
  });
  const handleClick = (args: { orderId: string; status: Status }) => {
    setActive(args);
    onChangeStatus(args);
  };
  const isActive = (orderId: string, status: Status) => {
    return orderId === active.orderId && status === active.status;
  };
  const getMessage = useGetMessage();
  const canDecline = user.preferences.manualApproval;
  const canApprove = canDecline;

  const { id: listingId } = listing;

  if (listing.status === Status.OPEN) {
    return (
      <div className={wrapperClass}>
        <ActionButton
          orderId=""
          action={Status.CLOSED}
          active={isActive('', Status.CLOSED)}
          status={status}
          onClick={handleClick}
        />
      </div>
    );
  }
  if (listing.status === Status.CLOSED) {
    return (
      <div className={wrapperClass}>
        <ActionButton
          orderId=""
          action={Status.OPEN}
          active={isActive('', Status.OPEN)}
          status={status}
          onClick={handleClick}
        />
        <Button
          className="w-full lg:w-auto space-x-4"
          component={Link}
          to={makeEditListingPath({ listingId })}
          kind="secondary"
        >
          <span>
            <FaPen />
          </span>
          <span>{getMessage(ids.order.actions.edit)}</span>
        </Button>
      </div>
    );
  }
  if (listing.status === Status.PLACED && orders.length > 1) {
    return (
      <MultiOrders
        active={active}
        onChangeStatus={handleClick}
        orders={orders}
        status={status}
      />
    );
  }
  const [order] = orders;

  if (order == null || order.status !== listing.status) {
    return null;
  }

  if (listing.status === Status.PLACED) {
    return (
      <div className={wrapperClass}>
        <If condition={canApprove}>
          <ActionButton
            orderId={order.id}
            action={Status.APPROVED}
            active={isActive(order.id, Status.APPROVED)}
            status={status}
            onClick={handleClick}
          />
        </If>
        <If condition={canDecline}>
          <ActionButton
            orderId={order.id}
            action={Status.DECLINED}
            active={isActive(order.id, Status.DECLINED)}
            status={status}
            onClick={handleClick}
          />
          <ActionButton
            orderId={order.id}
            action={Status.CLOSED}
            active={isActive(order.id, Status.CLOSED)}
            status={status}
            onClick={handleClick}
          />
        </If>
      </div>
    );
  }

  if (listing.status === Status.APPROVED) {
    return (
      <div className={cx(wrapperClass, 'justify-center')}>
        <Button
          kind="primary"
          className="w-full lg:w-auto space-x-4"
          onClick={() => setShowPostedModal(true)}
        >
          <FaEnvelope />
          <span>{getMessage(ids.order.actions.posted)}</span>
        </Button>
        <Modal
          title={getMessage(ids.listings.myListing.postedModal.title)}
          isOpen={showPostedModal}
          onClose={() => setShowPostedModal(false)}
        >
          <div className="space-y-8">
            <p>{getMessage(ids.listings.myListing.postedModal.details)}</p>
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 justify-around">
              <ActionButton
                orderId={order.id}
                action={Status.POSTED}
                active={isActive(order.id, Status.POSTED)}
                status={status}
                onClick={handleClick}
              />
              <Button
                kind="secondary"
                onClick={() => setShowPostedModal(false)}
                className="space-x-4 lg:order-first"
              >
                <FaTimes />
                <span>
                  {getMessage(ids.listings.myListing.postedModal.close)}
                </span>
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  if (listing.status === Status.COMPLETE) {
    return (
      <div className="md:flex md:space-x-4 lg:space-x-8">
        <LinkButton kind="secondary" padding to={NEW_LISTING}>
          {getMessage(ids.order.actions.listingComplete)}
        </LinkButton>
      </div>
    );
  }
  return null;
}
