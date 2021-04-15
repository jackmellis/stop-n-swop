import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import Input from 'ui/elements/Input';
import { ids } from 'ui/messages';

export default function Username() {
  const intl = useIntl();
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="lg:px-12 xl:px-0">
      <Controller
        name="username"
        defaultValue=""
        rules={{
          required: intl.formatMessage({
            id: ids.auth.register.username.required,
          }),
        }}
        render={({ field: { ref, ...input } }) => (
          <Input
            id="username"
            label={<FormattedMessage id={ids.auth.register.username.label} />}
            autoFocus
            error={errors.username}
            {...input}
          />
        )}
      />
    </div>
  );
}
