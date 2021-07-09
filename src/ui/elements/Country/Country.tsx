import { CountryISO, CountryOptions } from 'domain/constants';
import React from 'react';
import Select, { Props as SelectProps } from '../Select';

type Props = Omit<SelectProps, 'options'>;

export default function Country(props: Props) {
  return (
    <Select
      {...props}
      options={[
        {
          label: CountryISO.GB,
          value: 'GB',
        },
        {
          label: '------------',
          value: '',
        },
        ...CountryOptions,
      ]}
    />
  );
}
