import React, { useEffect, useState } from 'react';
import Button from 'ui/elements/Button';
import { FaRegBell } from 'react-icons/fa';
import { useBoop } from 'ui/hooks';
import { animated } from 'react-spring';
import cx from 'classnames';
import type { Notice } from '@sns/contracts/notice';

const getUnreadNotices = (notices: Notice[]) => {
  return notices.filter((notice) => notice.viewed === false).length;
};

export default function Bell({
  open,
  onOpen,
  notices,
}: {
  open: boolean;
  onOpen(): void;
  notices: Notice[];
}) {
  const [pulse, setPulse] = useState(false);
  const [style, boop] = useBoop({ rotation: -20, scale: 0.95 });
  const [unread, setUnread] = useState(() => getUnreadNotices(notices));
  const hasUnread = unread > 0;

  useEffect(() => {
    setUnread(getUnreadNotices(notices));
  }, [notices]);

  useEffect(() => {
    const handle = setTimeout(() => {
      if (open && hasUnread) {
        setUnread(0);
      }
    }, 500);
    return () => clearTimeout(handle);
  }, [open, hasUnread]);

  useEffect(() => {
    const h = setInterval(() => {
      setPulse((v) => !v);
    }, 1000);
    return () => clearInterval(h);
  }, []);

  return (
    <Button
      className="relative space-x-3"
      title="notifications"
      onClick={onOpen}
      onMouseEnter={boop}
    >
      <animated.span style={style}>
        <FaRegBell size="1em" />
      </animated.span>
      <If condition={hasUnread}>
        <div
          className={cx(
            'absolute bg-primary-light rounded-full w-5 h-5 top-0 right-0 flex justify-center items-center text-xs',
            pulse ? 'bg-primary-lightest' : 'bg-primary-light',
          )}
          style={{
            color: 'white',
            boxShadow: `0px 0px 5px ${pulse ? '5px' : '0px'} #0b825a`,
            transition: 'box-shadow 1000ms, background-color 1000ms',
          }}
        >
          {unread}
        </div>
      </If>
    </Button>
  );
}
