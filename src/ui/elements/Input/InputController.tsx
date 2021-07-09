import React, { ComponentType } from 'react';
import { Controller, RegisterOptions } from 'react-hook-form';
import DefaultInput, { Props as InputProps } from './Input';

export default function InputController({
  name,
  rules,
  defaultValue,
  Input = DefaultInput,
  ...props
}: Omit<InputProps, 'value' | 'defaultValue'> & {
  name: string;
  Input?: ComponentType<any>;
  rules?: RegisterOptions;
  defaultValue?: any;
  value?: any;
}) {
  return (
    <Controller
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { ref, ...input }, fieldState: { error } }) => (
        <Input {...props} {...input} error={error} />
      )}
    />
  );
}
