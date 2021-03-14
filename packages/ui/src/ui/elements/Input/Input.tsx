import React, { InputHTMLAttributes, ReactNode } from 'react';
import cx from 'classnames';
import './input.css';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  id: string;
  label: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  containerStyles?: Record<string, boolean>;
  styles?: Record<string, boolean>;
  labelStyles?: Record<string, boolean>;
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
  ...props
}: Props) {
  return (
    <div
      className={cx(
        'flex items-end border-b focus-within:border-green-500 flex-grow',
        containerStyles,
      )}
    >
      {prefix}
      <div className="flex-grow relative">
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
            'absolute left-0 top-0 text-sm text-gray-200 transition-all',
            labelStyles,
          )}
        >
          {label}
        </label>
      </div>
      {suffix}
    </div>
  );
}
