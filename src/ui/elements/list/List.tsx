import React, { ReactNode } from 'react';
import cx from 'classnames';

export default function List({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <ul className={cx('flex-grow', className)}>{children}</ul>;
}
