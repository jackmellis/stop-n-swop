import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaChevronDown,
  FaShoppingCart,
  FaSearch,
  FaListAlt,
  FaBoxOpen,
  FaUserCircle,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';
import cx from 'classnames';
import { useBoop } from 'ui/hooks';
import { TextButton } from 'ui/elements/Button';
import { FormattedMessage, useIntl } from 'react-intl';
import { animated } from 'react-spring';
import Logo from 'ui/assets/logo.png';
import { ids } from 'ui/messages';

const AnimatedLink = animated(Link);

const NavItem = ({
  className,
  to,
  children,
  Icon,
}: {
  className?: string;
  to: string;
  Icon: IconType;
  children: ReactNode;
}) => {
  const [style, boop] = useBoop({ x: 3, rotation: 3 });

  return (
    <animated.li style={style} onMouseEnter={boop}>
      <Link
        to={to}
        className={cx(
          'flex items-center space-x-3 w-full',
          'px-4 md:px-6 py-3',
          'hover:text-gray-500 transition-colors',
          className,
        )}
      >
        <Icon className="md:hidden" />
        <span className="md:text-xs lowercase md:uppercase">{children}</span>
      </Link>
    </animated.li>
  );
};

const Account = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) => {
  const [style, boop] = useBoop({ x: 3, rotation: 3 });

  return (
    <li style={style} onMouseEnter={boop}>
      <TextButton
        title="account"
        className="hidden md:flex justify-center items-center"
        style={{ paddingTop: 0, paddingBottom: 0, height: '100%' }}
        onClick={() => setOpen(!open)}
      >
        <animated.span style={style} onMouseEnter={boop}>
          <FaUserCircle size={25} />
        </animated.span>
      </TextButton>
      <ul
        className={cx(
          open ? '' : 'md:hidden',
          'md:absolute md:w-52 md:right-0 md:bg-gray-700 md:hover:bg-gray-600',
        )}
      >
        <NavItem to="/logout" Icon={FaUserCircle}>
          <FormattedMessage id={ids.nav.account.logout} />
        </NavItem>
      </ul>
    </li>
  );
};

const NavItems = ({
  open,
  accountOpen,
  setAccountOpen,
}: {
  open: boolean;
  accountOpen: boolean;
  setAccountOpen: (v: boolean) => void;
}) => {
  return (
    <ul className={cx(open ? '' : 'hidden', 'md:flex', 'items-center')}>
      <NavItem to="/browse" Icon={FaSearch}>
        <FormattedMessage id={ids.nav.browse} />
      </NavItem>
      <NavItem to="/my/collections" Icon={FaBoxOpen}>
        <FormattedMessage id={ids.nav.collections} />
      </NavItem>
      <NavItem to="/my/listings" Icon={FaListAlt}>
        <FormattedMessage id={ids.nav.listings} />
      </NavItem>
      <NavItem to="/checkout" className="hidden md:flex" Icon={FaShoppingCart}>
        <FormattedMessage id={ids.nav.basket} />
      </NavItem>
      <NavItem to="/login" Icon={FaUserCircle}>
        <FormattedMessage id={ids.nav.account.login} />
      </NavItem>
      <Account open={accountOpen} setOpen={setAccountOpen} />
    </ul>
  );
};

const Title = () => {
  const [style, boop] = useBoop({ x: 3, rotation: 3 });

  return (
    <AnimatedLink
      style={style}
      onMouseEnter={boop}
      to="/"
      className="hover:text-gray-500 transition-colors"
    >
      <img src={Logo} className="w-48" alt="Stop n Swop" />
    </AnimatedLink>
  );
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const intl = useIntl();

  return (
    <nav
      className="md:flex lg:mx-4 border-b-2 border-gray-800 font-title z-10"
      style={{ fontSize: 12 }}
    >
      <div className="flex items-center pl-3 md:flex-grow">
        <Title />
        <div className="flex-grow" />
        <TextButton
          title={intl.formatMessage({ id: ids.nav.basket })}
          component={Link}
          to="/checkout"
          className="md:hidden"
        >
          <FaShoppingCart />
        </TextButton>
        <TextButton
          title={intl.formatMessage({ id: ids.nav.menu })}
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          <FaChevronDown
            className={cx(
              'transition-transform transform',
              open ? 'rotate-180' : 'rotate-0',
            )}
          />
        </TextButton>
      </div>
      <NavItems
        open={open}
        accountOpen={accountOpen}
        setAccountOpen={setAccountOpen}
      />
    </nav>
  );
}
