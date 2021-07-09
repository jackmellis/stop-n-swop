import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import format from 'date-fns/format';
import Input, { Props } from './Input';

const getStringDate = (date: any) => {
  if (date instanceof Date) {
    return format(date, 'yyyy-MM-dd');
  }
  if (typeof date === 'string' && date.includes('T')) {
    return format(new Date(date), 'yyyy-MM-dd');
  }
  return date;
};

export default function DateInput({
  value,
  onChange,
  ...props
}: Omit<Props, 'value'> & {
  value?: Date;
}) {
  const strValue = getStringDate(value);
  const handleChange = (e: any) => {
    onChange?.(e.target.value);
  };

  return (
    <Input type="date" value={strValue} onChange={handleChange} {...props}>
      <FaCalendarAlt className="absolute cursor-pointer pointer-events-none right-3 bottom-3" />
    </Input>
  );
}
