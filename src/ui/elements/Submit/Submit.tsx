import { Status } from '@respite/core';
import React, { useEffect, useMemo } from 'react';
import Button, { Props as ButtonProps } from '../Button';

interface Props extends ButtonProps {
  status?: Status;
  reset?(): void;
}

export default function Submit({ status, reset, ...props }: Props) {
  const state = useMemo(() => {
    if (props.disabled) {
      return 'disabled';
    }
    if (status === Status.LOADING) {
      return 'pending';
    }
    if (status === Status.SUCCESS) {
      return 'success';
    }
    return 'none';
  }, [props.disabled, status]);

  useEffect(() => {
    let handle: NodeJS.Timeout;
    if (status === Status.SUCCESS && reset) {
      handle = setTimeout(reset, 1000);
    }
    return () => clearTimeout(handle);
  }, [reset, status]);

  return <Button type="submit" kind="primary" state={state} {...props} />;
}
