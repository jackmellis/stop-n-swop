import React, { ComponentType } from 'react';
import { Controller, RegisterOptions } from 'react-hook-form';
import DefaultSelect, { Props as SelectProps } from './Select';

interface Props extends Omit<SelectProps, 'value' | 'onChange' | 'error'> {
  name: string;
  rules?: RegisterOptions;
  defaultValue?: any;
  Select?: ComponentType<any>;
}

export default function SelectController({
  name,
  rules,
  defaultValue,
  Select = DefaultSelect,
  ...props
}: Props) {
  return (
    <Controller
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { ref, ...input }, fieldState: { error } }) => (
        <Select {...props} {...input} error={error} />
      )}
    />
  );
}
