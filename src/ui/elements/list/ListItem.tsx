import React, { CSSProperties, ReactNode } from 'react';
import cx from 'classnames';

interface Props {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export default function ListItem({ style, children, className }: Props) {
  return (
    <li
      className={cx('mb-2 flex justify-center bg-black', className)}
      style={style}
    >
      {children}
    </li>
  );
}
