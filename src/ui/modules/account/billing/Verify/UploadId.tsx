import React from 'react';
import Upload from 'ui/elements/Upload/Upload';
import { Status } from '@respite/core';

export default function UploadId({
  onChange,
  status,
}: {
  status: Status;
  onChange(file: File): any;
}) {
  return (
    <Upload
      onChange={() => null}
      status={
        [Status.IDLE, Status.ERROR].includes(status) ? 'empty' : 'uploading'
      }
      uploadError={null}
      value=""
      upload={async (file) => {
        onChange(file);
        return '';
      }}
    />
  );
}
