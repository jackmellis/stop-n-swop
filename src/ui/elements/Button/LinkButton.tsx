import React from 'react';
import { Link } from 'react-router-dom';
import type { Props } from './types';
import Button from './Button';

export default function LinkButton(props: Props) {
  return <Button component={Link} padding={false} {...props} />;
}
