import React, { ReactNode } from 'react';
import { List } from 'ui/elements/list';

export default function ListingsList({ children }: { children: ReactNode }) {
  return <List>{children}</List>;
}
