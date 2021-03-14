import React, { forwardRef } from 'react';
import cx from 'classnames';
import { Kind, ButtonComponent, Props } from './types';

const getColorClassNames = ({
  disabled,
  kind,
}: {
  disabled?: boolean;
  kind: Kind;
}) => {
  if (kind === 'primary') {
    if (disabled) {
      return { 'bg-gray-400': true, 'text-white': true };
    }
    return {
      'bg-green-500': true,
      'hover:bg-green-700': true,
      'text-white': true,
    };
  }
  if (kind === 'secondary') {
    if (disabled) {
      return { 'text-gray-300': true, 'border-gray-300': true, border: true };
    }
    return {
      'border-white': true,
      border: true,
      'hover:text-purple-300': true,
      'hover:border-purple-200': true,
    };
  }
  if (kind === 'tertiary') {
    if (disabled) {
      return { 'text-gray-300': true };
    }
    return { 'text-green-500': true, 'hover:text-green-300': true };
  }
  if (kind === 'danger') {
    if (disabled) {
      return { 'bg-gray-400': true, 'text-white': true };
    }
    return { 'bg-red-500': true, 'hover:bg-red-400': true, 'text-white': true };
  }
  if (disabled) {
    return { 'text-300': true };
  }
  return { 'hover:text-green-200': true };
};

export const getClassNames = ({ disabled }: { disabled?: boolean } = {}) => {
  return {
    flex: true,
    'items-center': true,
    'px-4': true,
    'py-3': true,
    rounded: true,
    'font-medium': true,
    'transition-colors': true,
    'cursor-not-allowed': disabled,
  };
};

const Button: ButtonComponent = forwardRef<HTMLButtonElement, Props>(
  (
    {
      component: Button = 'button',
      children,
      disabled,
      kind = 'none',
      className,
      styles,
      ...props
    },
    ref,
  ) => (
    <Button
      ref={ref}
      type="button"
      className={cx(className, {
        ...getColorClassNames({ kind, disabled }),
        ...getClassNames({ disabled }),
        ...styles,
      })}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  ),
);

export default Button;
