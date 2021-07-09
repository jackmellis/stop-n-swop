import React, { ReactNode, useEffect } from 'react';
import Input, { DateInput, InputController } from 'ui/elements/Input';
import { useForm } from 'react-hook-form';
import { useUpdateUser, useUser } from 'application/user';
import { useIntl } from 'ui/intl';
import { ids } from 'ui/messages';
import FormError from 'ui/elements/FormError';
import Submit from 'ui/elements/Submit';
import { omitNullProperties } from 'crosscutting/utils';
import { ValidationError } from '@sns/abyss';
import { SelectController } from 'ui/elements/Select';
import addYears from 'date-fns/addYears';
import format from 'date-fns/format';
import Country from 'ui/elements/Country/Country';
import Form from '../../dashboard/Form';

export default function Details({
  onSubmit,
  title,
  description,
  submitText,
  mandatory = false,
  showEmail = true,
}: {
  title: ReactNode;
  description: ReactNode;
  submitText: ReactNode;
  mandatory?: boolean;
  showEmail?: boolean;
  onSubmit?(): any;
}) {
  const { data: user } = useUser();
  const formProps = useForm();
  const { setError } = formProps;
  const intl = useIntl();
  const getMessage = intl.message;
  const { action, error, status, reset } = useUpdateUser();

  const handleSubmit = async (values: any) => {
    await action(omitNullProperties(values));
    onSubmit?.();
  };

  useEffect(() => {
    if (error instanceof ValidationError) {
      Object.entries(error.errors).forEach(([key, value]) => {
        setError(key, { type: 'custom', message: value });
      });
    }
  }, [error, setError]);

  const required = getMessage(ids.error.required);

  return (
    <Form formProps={formProps} onSubmit={handleSubmit}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-100 italic">{description}</p>
      <FormError error={error} />
      <div className="flex flex-col flex-grow">
        <If condition={showEmail}>
          <div className="my-4 w-full md:w-1/2 mx-auto">
            <Input
              id="email"
              disabled
              label={getMessage(ids.account.aboutMe.email.email.label)}
              defaultValue={user.email ?? ''}
            />
          </div>
        </If>
        <div className="my-4 w-full md:w-1/2 mx-auto">
          <InputController
            id="firstName"
            name="firstName"
            defaultValue={user.firstName ?? ''}
            label={getMessage(ids.account.aboutMe.details.firstName.label)}
            rules={{
              required: {
                message: required,
                value: mandatory,
              },
            }}
            autoComplete="given-name"
          />
        </div>
        <div className="my-4 w-full md:w-1/2 mx-auto">
          <InputController
            id="lastName"
            name="lastName"
            defaultValue={user.lastName ?? ''}
            label={getMessage(ids.account.aboutMe.details.lastName.label)}
            rules={{
              required: {
                message: required,
                value: mandatory,
              },
            }}
            autoComplete="family-name"
          />
        </div>
        <div className="my-4 w-full md:w-1/2 mx-auto">
          <InputController
            Input={DateInput}
            id="dateOfBirth"
            name="dateOfBirth"
            defaultValue={user.dateOfBirth ?? ''}
            label={getMessage(ids.account.aboutMe.details.dateOfBirth.label)}
            rules={{
              required: {
                message: required,
                value: mandatory,
              },
            }}
            autoComplete="bday"
            min={format(addYears(new Date(), -100), 'yyyy-MM-dd')}
            max={format(addYears(new Date(), -16), 'yyyy-MM-dd')}
          />
        </div>
        <div className="my-4 w-full md:w-1/2 mx-auto">
          <SelectController
            Select={Country}
            name="nationality"
            id="nationality"
            label={getMessage(ids.account.aboutMe.details.nationality.label)}
            defaultValue={user.nationality ?? ''}
            options={[]}
            rules={{
              required: {
                message: required,
                value: mandatory,
              },
            }}
          />
        </div>
        <div>
          <Submit kind="primary" reset={reset} status={status}>
            {submitText}
          </Submit>
        </div>
      </div>
    </Form>
  );
}
