import React, { ReactNode } from 'react';

export default function List({ children }: { children: ReactNode }) {
  return (
    <ol className="list-decimal list-outside ml-4 space-y-8">{children}</ol>
  );
}
