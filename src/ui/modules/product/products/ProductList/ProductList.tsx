import React, { ReactNode } from 'react';
import { Grid } from 'ui/elements/grid';

export default function ProductGrid({ children }: { children: ReactNode }) {
  return <Grid>{children}</Grid>;
}
