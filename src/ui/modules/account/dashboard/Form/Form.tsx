import React, { ReactNode } from 'react';
import { FormProvider, UseFormReturn } from 'react-hook-form';

export default function Form({
  children,
  formProps,
  onSubmit,
}: {
  formProps: UseFormReturn<any>;
  children: ReactNode;
  onSubmit(values: unknown): Promise<unknown>;
}) {
  return (
    <FormProvider {...formProps}>
      <form
        onSubmit={formProps.handleSubmit(onSubmit)}
        className="flex flex-col flex-grow"
      >
        {children}
      </form>
    </FormProvider>
  );
}
