import { createContext } from 'react';

export default createContext<{
  isChecked(value: any): boolean;
  check(value: any): void;
  uncheck(value: any): void;
}>(null);
