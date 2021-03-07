import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useErrorMessage } from 'domain/selectors/common';

interface Props extends FallbackProps {
  error: any;
}

export default function ErrorPage({ error }: Props) {
  const message = useErrorMessage(error);

  return <>{message}</>;
}
