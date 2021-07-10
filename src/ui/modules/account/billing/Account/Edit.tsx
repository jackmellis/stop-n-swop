import React, { ReactNode, useEffect } from 'react';
import Input, { InputController } from 'ui/elements/Input';
import { Controller, useForm } from 'react-hook-form';
import { useIntl } from 'ui/intl';
import { ids } from 'ui/messages';
import FormError from 'ui/elements/FormError';
import Submit from 'ui/elements/Submit';
import { ValidationError } from '@sns/abyss';
import Button from 'ui/elements/Button';
import Form from '../../dashboard/Form';
import SortCodeInput from './SortCodeInput';
import AddressFields from '../../about-me/Address/AddressFields';
import type { User } from '@sns/contracts/user';
import type { Status } from '@respite/core';

export default function Details({
  onSubmit,
  title,
  description,
  user,
  submitText,
  setHasAccount,
  error,
  status,
  reset,
}: {
  user: User;
  title?: ReactNode;
  description: ReactNode;
  submitText: ReactNode;
  error: any;
  status: Status;
  setHasAccount(v: boolean): void;
  reset(): void;
  onSubmit(values: any): any;
}) {
  const formProps = useForm();
  const intl = useIntl();
  const { setError } = formProps;
  const getMessage = intl.message;

  useEffect(() => {
    if (error instanceof ValidationError) {
      Object.entries(error.errors).forEach(([key, value]) => {
        setError(key, { type: 'custom', message: value });
      });
    }
  }, [error, setError]);

  const required = getMessage(ids.error.required);

  return (
    <Form formProps={formProps} onSubmit={onSubmit}>
      <If condition={title}>
        <h3 className="text-lg font-bold">{title}</h3>
      </If>
      <p className="text-sm text-gray-100 italic">{description}</p>
      <div className="my-8">
        <FormError error={error} />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="my-4 w-full lg:w-2/3 xl:w-1/2 mx-auto">
          <InputController
            id="name"
            name="name"
            defaultValue={[user.firstName, user.lastName]
              .filter(Boolean)
              .join(' ')}
            label={getMessage(ids.account.billing.account.name.label)}
            rules={{ required }}
            autoFocus
          />
        </div>
        <div className="my-4 w-full lg:w-2/3 xl:w-1/2 mx-auto">
          <InputController
            Input={SortCodeInput}
            id="sortcode"
            name="sortCode"
            defaultValue=""
            label={getMessage(ids.account.billing.account.sortCode.label)}
            rules={{
              required,
            }}
          />
        </div>
        <div className="my-4 w-full lg:w-2/3 xl:w-1/2 mx-auto">
          <Controller
            name="accountNumber"
            rules={{ required }}
            defaultValue=""
            render={({
              field: { ref, onChange, ...field },
              fieldState: { error },
            }) => (
              <Input
                id="accountNumber"
                label={getMessage(
                  ids.account.billing.account.accountNumber.label,
                )}
                placeholder="12345678"
                error={error}
                inputMode="numeric"
                minLength={8}
                maxLength={8}
                onChange={(e) => {
                  if (Number.isNaN(Number(e.target.value))) {
                    return;
                  }
                  onChange(e);
                }}
                {...field}
              />
            )}
          />
        </div>
        <div className="w-full lg:w-2/3 xl:w-1/2 md:mx-auto my-4 ">
          <h4 className="my-8">
            {getMessage(ids.account.aboutMe.address.title)}
          </h4>
          <div>
            <AddressFields address={user.address} fullWidth />
          </div>
        </div>
      </div>
      <div className="flex justify-between flex-row-reverse">
        <Submit kind="primary" reset={reset} status={status}>
          {submitText}
        </Submit>
        <If condition={user.hasAccount}>
          <Button kind="tertiary" onClick={() => setHasAccount(true)}>
            {getMessage(ids.account.billing.account.cancel)}
          </Button>
        </If>
      </div>
    </Form>
  );
}
