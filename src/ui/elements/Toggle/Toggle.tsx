import React, { ReactNode } from 'react';
import cx from 'classnames';

interface Props {
  label: ReactNode;
  value: boolean;
  onChange(value: boolean): void;
}

export default function Toggle({ label, onChange, value }: Props) {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="flex items-center space-x-4 cursor-pointer">
      <If condition={label}>
        <span>{label}</span>
      </If>
      <button
        type="button"
        role="checkbox"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={cx(
          'relative inline-flex flex-shrink-0',
          'transition-colors duration-200 ease-in-out',
          'border-2 border-transparent rounded-full',
          'focus:ring-2 focus:ring-primary-dark focus:outline-none focus:ring-opacity-50',
          value ? 'bg-primary' : 'bg-gray-300',
        )}
      >
        <span className="inline-block w-5 h-5" />
        <span className="inline-block w-5 h-5" />
        <span
          className={cx(
            'inline-block w-5 h-5 absolute transform transition ease-in-out rounded-full bg-white shadow',
            value ? 'translate-x-full' : 'translate-x-0',
          )}
        />
      </button>
    </label>
  );
}
