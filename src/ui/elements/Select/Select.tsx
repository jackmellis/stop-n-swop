import React, { ReactNode } from 'react';
import FieldError from '../FieldError';

interface Props {
  label: ReactNode;
  value: any;
  options: Array<{ label: ReactNode; value: any }>;
  id: string;
  error?: any;
  onChange?(value: any): void;
}

export default function Select({
  label,
  value,
  onChange,
  options,
  id,
  error,
}: Props) {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-200 text-sm">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="w-full block bg-transparent border-b border-white focus:border-green-500"
      >
        {options.map(({ label, value }) => (
          <option value={value} className="bg-black text-white">
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
