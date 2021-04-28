import React, { InputHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import './input.css';
import FieldError from '../FieldError';

type State = 'success' | 'error' | 'none';

export interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  id: string;
  label: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  containerStyles?: Record<string, boolean>;
  styles?: Record<string, boolean>;
  labelStyles?: Record<string, boolean>;
  state?: State;
  error?: any;
}

export default function Input({
  prefix,
  suffix,
  containerStyles,
  className,
  styles,
  labelStyles,
  label,
  id,
  error,
  state = error ? 'error' : 'none',
  ...props
}: Props) {
  return (
    <>
      <div
        className={cx(
          'flex items-end border-b flex-grow',
          {
            'focus-within:border-primary': state === 'none',
            'border-danger focus-within:border-danger-light': state === 'error',
          },
          containerStyles,
        )}
      >
        {prefix}
        <div className="flex-grow relative mt-6">
          <input
            id={id}
            className={cx(
              'input',
              'bg-transparent outline-none w-full',
              styles,
              className,
            )}
            {...props}
          />
          <label
            htmlFor={id}
            className={cx(
              'absolute left-0 top-0 text-sm transition-all text-gray-200',
              labelStyles,
            )}
          >
            {label}
          </label>
        </div>
        {suffix}
      </div>
      <If condition={Boolean(error)}>
        <FieldError error={error} />
      </If>
    </>
  );
}
