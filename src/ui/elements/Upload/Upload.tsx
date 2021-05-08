import React from 'react';
import type { ImageUrl } from 'domain/types';
import { getErrorMessage } from 'domain/selectors/common';
import { useIntl } from 'ui/intl';
import { CommonCode } from '@sns/contracts/common';
import Empty from './Empty';
import Port from './Port';
import Preview from './Preview';
import Uploading from './Uploading';
import FieldError from '../FieldError';

export default function Upload({
  value,
  status,
  error,
  uploadError,
  onChange,
  upload,
}: {
  value: ImageUrl;
  status: 'preview' | 'uploading' | 'empty';
  error?: any;
  uploadError: any;
  onChange(value: ImageUrl): void;
  upload(file: File): Promise<string>;
}) {
  const intl = useIntl();
  const handleClear = () => {
    onChange(null);
  };
  const handleUpload = async (files: FileList) => {
    const value = await upload(files[0]);
    onChange(value);
  };

  const errorMessage = (() => {
    if (error != null) {
      return error;
    }
    if (uploadError == null) {
      return null;
    }
    if (uploadError.error?.code === CommonCode.VALIDATION) {
      return Object.values(uploadError.error.errors)[0];
    }
    return getErrorMessage(uploadError, intl);
  })();

  return (
    <>
      <Port>
        <Choose>
          <When condition={status === 'preview'}>
            <Preview onClear={handleClear} preview={value} />
          </When>
          <When condition={status === 'uploading'}>
            <Uploading />
          </When>
          <Otherwise>
            <Empty onFileSelect={handleUpload} />
          </Otherwise>
        </Choose>
      </Port>
      <If condition={Boolean(error || uploadError)}>
        <FieldError error={errorMessage} />
      </If>
    </>
  );
}
