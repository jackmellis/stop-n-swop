import React, { ReactNode } from 'react';
import { FaCheck } from 'react-icons/fa';
import cx from 'classnames';

interface Props {
  value: boolean;
  label: ReactNode;
  className?: string;
  onChange(checked: boolean): void;
}

export default function Checkbox({ onChange, value, label, className }: Props) {
  return (
    <label
      className={cx('flex space-x-2 items-center cursor-pointer', className)}
    >
      <button
        type="button"
        className={cx(
          value
            ? 'bg-green-500 border-transparent text-white'
            : 'border-white text-transparent',
          'p-1 border-2 transition-colors',
        )}
        role="checkbox"
        aria-checked={value}
        onClick={() => onChange(!value)}
      >
        <FaCheck className="text-xs" />
      </button>
      <span>{label}</span>
    </label>
  );
}
