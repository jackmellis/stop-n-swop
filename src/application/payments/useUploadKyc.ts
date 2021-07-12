import { encase } from 'react-jpex';
import { useAction } from '@respite/action';
import { UploadKycKey } from 'application/keys';
import type { UploadDocument } from 'core/payments';

export const useUploadKyc = encase((upload: UploadDocument) => () => {
  return useAction(
    UploadKycKey,
    (files: File[]) => {
      return upload({ files });
    },
    [],
  );
});
