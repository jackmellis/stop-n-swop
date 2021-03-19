import React, { ReactNode, useContext } from 'react';
import Checkbox from './Checkbox';
import context from './context';

interface Props {
  value: any;
  label: ReactNode;
}

export default function CheckboxGroupItem({ value, label }: Props) {
  const { check, isChecked, uncheck } = useContext(context);

  return (
    <Checkbox
      label={label}
      value={isChecked(value)}
      onChange={(checked) => {
        if (checked) {
          check(value);
        } else {
          uncheck(value);
        }
      }}
    />
  );
}
