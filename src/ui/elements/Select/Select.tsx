import React, { ReactNode } from 'react';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';
import FieldError from '../FieldError';

export interface Props {
  label: ReactNode;
  value: any;
  options: Array<{ label: ReactNode; value: any }>;
  id: string;
  error?: any;
  disabled?: boolean;
  onChange?(value: any): void;
  placeholder?: string;
}

export default function Select({
  label,
  value,
  onChange,
  options,
  id,
  error,
  disabled,
  placeholder,
}: Props) {
  const g = useGetMessage();

  return (
    <div>
      <label htmlFor={id} className="block text-gray-200 text-xs">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full block bg-transparent border-b border-white focus:border-primary py-2"
        disabled={disabled}
      >
        <option value="" className="bg-black text-white">
          {placeholder ?? g(ids.elements.select.defaultLabel)}
        </option>
        {options.map(({ label, value }, i) => (
          <option
            // eslint-disable-next-line react/no-array-index-key
            key={`${value}_${i}`}
            value={value}
            className="bg-black text-white"
          >
            {label}
          </option>
        ))}
      </select>
      <If condition={Boolean(error)}>
        <FieldError error={error} />
      </If>
    </div>
  );
}
