import React, { ReactNode } from 'react';
import { List } from '../list';

export default function Grid({ children }: { children?: ReactNode }) {
  return <List className="md:flex flex-wrap lg:self-start">{children}</List>;
}
