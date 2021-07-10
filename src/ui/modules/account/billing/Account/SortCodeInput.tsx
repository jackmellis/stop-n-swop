import React, { useEffect, useRef, useState } from 'react';
import FieldError from 'ui/elements/FieldError';
import Input from 'ui/elements/Input';
import { useGetMessage } from 'ui/intl';
import { ids } from 'ui/messages';

const dash = '-';
const Dash = () => <span className="pt-6">{dash}</span>;

export default function SortCodeInput({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange(value: any): void;
  error?: any;
}) {
  const getMessage = useGetMessage();
  const ref = useRef<HTMLDivElement>(null);
  // split the value into 3 2-digit parts
  const [values, setValues] = useState<string[]>(() => {
    const v = value || '';
    return [v.substr(0, 2), v.substr(2, 2), v.substr(4, 2)];
  });
  const parsed = values.join('');

  useEffect(() => {
    // prevent infinite loop by only updating when the value already matches
    if (parsed === value && parsed !== '') {
      return;
    }
    const v = value || '';
    setValues([v.substr(0, 2), v.substr(2, 2), v.substr(4, 2)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  useEffect(() => {
    // trigger onChange when the local value has definitely changed
    if (parsed !== value) {
      onChange(parsed);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsed]);

  return (
    <div>
      <div className="flex space-x-2" ref={ref}>
        <div className="w-8">
          <Input
            id="sortcode0"
            label={getMessage(ids.account.billing.account.sortCode.label)}
            labelClassName="w-60"
            // className="text-center"
            maxLength={6}
            placeholder="00"
            inputMode="numeric"
            value={values[0]}
            onChange={(e) => {
              const { value } = e.target;

              if (value) {
                if (Number.isNaN(Number(value))) {
                  return;
                }
                const inputs = ref.current.querySelectorAll('input');

                switch (value.length) {
                  case 0:
                    setValues(['', values[1], values[2]]);
                    break;
                  case 1:
                    setValues([value, values[1], values[2]]);
                    break;
                  case 2:
                    setValues([value, '', values[2]]);
                    inputs[1].focus();
                    break;
                  case 3:
                    setValues([
                      value.substr(0, 2),
                      value.substr(2, 1),
                      values[2],
                    ]);
                    inputs[1].focus();
                    break;
                  case 4:
                    setValues([value.substr(0, 2), value.substr(2, 2), '']);
                    inputs[2].focus();
                    break;
                  case 5:
                    setValues([
                      value.substr(0, 2),
                      value.substr(2, 2),
                      value.substr(4, 1),
                    ]);
                    inputs[2].focus();
                    break;
                  case 6:
                  default:
                    setValues([
                      value.substr(0, 2),
                      value.substr(2, 2),
                      value.substr(4, 2),
                    ]);
                    inputs[2].focus();
                    break;
                }
              } else {
                setValues(['', values[1], values[2]]);
              }
            }}
          />
        </div>
        <Dash />
        <div className="w-8">
          <Input
            id="sortcode1"
            maxLength={4}
            inputMode="numeric"
            value={values[1]}
            placeholder="00"
            onKeyDown={(e) => {
              if (!values[1] && e.key === 'Backspace') {
                ref.current.querySelectorAll('input')[0].focus();
              }
            }}
            onChange={(e) => {
              const { value } = e.target;

              if (value) {
                if (Number.isNaN(Number(value))) {
                  return;
                }
                const inputs = ref.current.querySelectorAll('input');

                switch (value.length) {
                  case 0:
                    setValues([values[0], '', values[2]]);
                    break;
                  case 1:
                    setValues([values[0], value, values[2]]);
                    break;
                  case 2:
                    setValues([values[0], value, '']);
                    inputs[2].focus();
                    break;
                  case 3:
                    setValues([
                      values[0],
                      value.substr(0, 2),
                      value.substr(2, 1),
                    ]);
                    inputs[2].focus();
                    break;
                  case 4:
                  default:
                    setValues([
                      values[0],
                      value.substr(0, 2),
                      value.substr(2, 2),
                    ]);
                    inputs[2].focus();
                    break;
                }
              } else {
                setValues([values[0], '', values[2]]);
              }
            }}
          />
        </div>
        <Dash />
        <div className="w-8">
          <Input
            id="sortcode2"
            maxLength={2}
            inputMode="numeric"
            value={values[2]}
            placeholder="00"
            onKeyDown={(e) => {
              if (!values[2] && e.key === 'Backspace') {
                ref.current.querySelectorAll('input')[1].focus();
              }
            }}
            onChange={(e) => {
              const { value } = e.target;

              if (value) {
                if (Number.isNaN(Number(value))) {
                  return;
                }

                switch (value.length) {
                  case 0:
                    setValues([values[0], values[1], '']);
                    break;
                  case 1:
                  case 2:
                    setValues([values[0], values[1], value]);
                    break;
                  default:
                    setValues([values[0], values[1], value.substr(0, 2)]);
                    break;
                }
              } else {
                setValues([values[0], values[1], '']);
              }
            }}
          />
        </div>
      </div>
      <If condition={error}>
        <FieldError error={error} />
      </If>
    </div>
  );
}
