import React, { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { useUpdateUser } from 'application/user';
import FormError from 'ui/elements/FormError';
import Submit from 'ui/elements/Submit';
import Form from '../../dashboard/Form';
import AddressFields from './AddressFields';
import type { User } from '@sns/contracts/user';

export default function Address({
  title,
  description,
  submitText,
  onSubmit,
  user,
}: {
  user: User;
  title?: ReactNode;
  description: ReactNode;
  submitText: ReactNode;
  onSubmit?(): any;
}) {
  const { action, error, reset, status } = useUpdateUser();
  const handleSubmit = async (values: any) => {
    await action(values);
    onSubmit?.();
  };

  const formProps = useForm();

  return (
    <Form formProps={formProps} onSubmit={handleSubmit}>
      <If condition={title}>
        <h3 className="text-lg font-bold">{title}</h3>
      </If>
      <p className="text-sm text-gray-100 italic">{description}</p>
      <FormError error={error} />
      <AddressFields address={user.address} className="mt-8" />
      <div className="flex justify-end">
        <Submit status={status} reset={reset}>
          {submitText}
        </Submit>
      </div>
    </Form>
  );
}
