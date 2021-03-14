import React, { ReactNode } from 'react';

export default function Grid({ children }: { children: ReactNode }) {
  return (
    <ul className="flex-grow md:flex flex-wrap lg:self-start">{children}</ul>
  );
}
