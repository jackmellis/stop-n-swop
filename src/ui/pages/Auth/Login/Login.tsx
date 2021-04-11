import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type { Status } from '@respite/core';
import Login from 'ui/modules/auth/login/Login';
import LoginForm from 'ui/modules/auth/login/Form';
import type { Values } from 'ui/modules/auth/login/types';

export default function LoginPage({
  onSubmit,
  status,
}: {
  onSubmit(values: Values): Promise<void>;
  status: Status;
}) {
  const formProps = useForm<Values>({
    reValidateMode: 'onChange',
  });
  const { handleSubmit } = formProps;

  return (
    <FormProvider {...formProps}>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Login status={status} />
      </LoginForm>
    </FormProvider>
  );
}
