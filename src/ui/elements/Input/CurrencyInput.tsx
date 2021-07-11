import React, { useMemo, useState } from 'react';
import { useGetCurrency } from 'ui/intl';
import cx from 'classnames';
import Input, { Props } from './Input';

export default function CurrencyInput({
  value: actual,
  onFocus,
  onBlur,
  onChange,
  className,
  ...props
}: Props) {
  const [focused, setFocused] = useState(false);
  const getCurrency = useGetCurrency();
  const type = focused ? 'number' : 'text';
  const value = useMemo(() => {
    if (actual == null || actual === '') {
      return '';
    }
    if (focused) {
      return Number(actual) / 100;
    }
    return getCurrency(Number(actual), { currency: 'GBP' });
  }, [actual, focused, getCurrency]);

  return (
    <Input
      type={type}
      className={cx(className, 'text-right')}
      value={value}
      onFocus={(e) => {
        setFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        setFocused(false);
        onBlur?.(e);
      }}
      onChange={(e) => {
        let value: string | number = e.target.value ?? '';
        if (value.match(/\.(\d){3}/)) {
          value = value.replace(/\.(\d\d)\d+/, '.$1');
          e.target.value = value;
        }
        if (value) {
          value = Number(value) * 100;
        }
        onChange?.(value as any);
      }}
      {...props}
    />
  );
}
