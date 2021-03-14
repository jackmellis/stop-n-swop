import { createContext } from 'react';

export default createContext<{
  active: string | null;
  setActive(value: string | null): void;
}>(null);
