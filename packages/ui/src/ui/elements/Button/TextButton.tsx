import React, { ComponentProps } from 'react';
import cx from 'classnames';
// eslint-disable-next-line import/no-named-default
import type { default as Button, Kind } from './Button';

type Props = ComponentProps<typeof Button>;

const getColorClassNames = ({
  disabled,
  kind,
}: {
  disabled?: boolean;
  kind: Kind;
}) => {
  if (disabled) {
    // return 'text-gray-100';
  }
  if (kind === 'secondary') {
    // return 'text-gray-400';
  }
  return 'text-white hover:text-gray-500 transition-colors';
};

const getClassNames = ({
  disabled,
  kind,
}: { disabled?: boolean; kind?: Kind } = {}) => {
  return cx(
    'px-4 py-3',
    'bg-transparent',
    getColorClassNames({ kind, disabled }),
    disabled && 'cursor-not-allowed',
  );
};

const TextButton = ({
  component: Button = 'button',
  children,
  disabled,
  kind = 'primary',
  className,
  ...props
}: Props) => (
  <Button
    type="button"
    disabled={disabled}
    className={cx(getClassNames({ disabled, kind }), className)}
    {...props}
  >
    {children}
  </Button>
);

export default TextButton;
