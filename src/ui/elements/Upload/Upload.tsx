import React from 'react';
import type { ImageUrl } from 'domain/types';
import Empty from './Empty';
import Port from './Port';
import Preview from './Preview';
import Uploading from './Uploading';
import FieldError from '../FieldError';

export default function Upload({
  value,
  status,
  error,
  onChange,
  upload,
}: {
  value: ImageUrl;
  status: 'preview' | 'uploading' | 'empty';
  error?: any;
  onChange(value: ImageUrl): void;
  upload(file: File): Promise<string>;
}) {
  const handleClear = () => {
    onChange(null);
  };
  const handleUpload = async (files: FileList) => {
    const value = await upload(files[0]);
    onChange(value);
  };

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
      <If condition={Boolean(error)}>
        <FieldError error={error} />
      </If>
    </>
  );
}
