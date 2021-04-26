import React from 'react';
import { Controller, RegisterOptions } from 'react-hook-form';
import Input, { Props as InputProps } from './Input';

export default function InputController({
  name,
  rules,
  defaultValue,
  ...props
}: InputProps & {
  name: string;
  rules?: RegisterOptions;
  defaultValue?: any;
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
