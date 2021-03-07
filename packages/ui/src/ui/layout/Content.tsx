import React, { ReactNode } from 'react';

export default function Content({ children }: { children: ReactNode }) {
  return <main className="flex-grow">{children}</main>;
}
