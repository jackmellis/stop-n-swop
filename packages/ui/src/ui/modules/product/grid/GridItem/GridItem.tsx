import React, { CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

interface Props {
  to: string;
  name: ReactNode;
  image: string;
  ctas: ReactNode[];
  style?: CSSProperties;
  children: ReactNode;
}

export default function GridItem({
  to,
  children,
  name,
  image,
  ctas,
  style,
}: Props) {
  return (
    <li
      className={cx(
        'mb-2 flex justify-center',
        'md:w-1/2 md:mb-12 md:items-start',
        'lg:w-1/3',
        'xl:w-1/4',
      )}
      style={style}
    >
      <Link
        to={to}
        className={cx(
          'flex bg-gray-700 space-x-4 w-full h-full hover:bg-gray-600 hover:filter-contrast',
          'md:space-x-0 md:flex-col md:w-3/4',
          'lg:w-5/6',
        )}
      >
        <div className="w-1/4 md:w-full flex-shrink-0 relative md:pb-2/3">
          <div
            className="bg-cover w-full h-full md:absolute hover:bg-opacity-50"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        <div className="hidden md:block px-2">{name}</div>
        <div className="flex-grow flex md:px-2">
          <div className="flex flex-col flex-grow justify-between space-y-3 py-3">
            <div className="md:hidden">{name}</div>
            {children}
          </div>
          <div className="flex flex-col justify-center">{ctas}</div>
        </div>
      </Link>
    </li>
  );
}
