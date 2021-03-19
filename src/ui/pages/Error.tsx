import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { getErrorMessage } from 'core/selectors/common';
import { useIntl } from 'react-intl';

interface Props extends FallbackProps {
  error: any;
}

export default function ErrorPage({ error }: Props) {
  const message = getErrorMessage(error, useIntl());

  return <>{message}</>;
}
