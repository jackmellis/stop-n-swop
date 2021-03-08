import React, { ComponentType, ButtonHTMLAttributes, forwardRef } from 'react';
import cx from 'classnames';

export type Kind = 'primary' | 'secondary' | 'tertiary';

type Attributes = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends Attributes {
  component?: ComponentType<any> | string;
  kind?: Kind;
  [key: string]: any;
}

const getColorClassNames = ({
  disabled,
  kind,
}: {
  disabled?: boolean;
  kind: Kind;
}) => {
  if (kind === 'tertiary') {
    return 'bg-red-500 text-white';
  }
  if (kind === 'secondary') {
    if (disabled) {
      // return 'bg-gray-100 text-gray-400';
    }
    return 'bg-purple-500 text-white hover:bg-purple-700 transition-colors';
  }
  if (disabled) {
    // return 'bg-blue-100 text-gray-400';
  }
  if (kind === 'primary') {
    return 'bg-green-500 text-white hover:bg-green-700 transition-colors';
  }
  return '';
};

export const getClassNames = ({
  disabled,
  kind,
}: { disabled?: boolean; kind?: Kind } = {}) => {
  return cx(
    getColorClassNames({ disabled, kind }),
    'flex items-center space-x-3',
    'px-4 py-3 rounded font-medium',
    disabled && 'cursor-not-allowed',
  );
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      component: Button = 'button',
      children,
      disabled,
      kind = 'primary',
      className,
      ...props
    },
    ref,
  ) => (
    <Button
      ref={ref}
      type="button"
      className={cx(getClassNames({ disabled, kind }), className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  ),
);

export default Button;
