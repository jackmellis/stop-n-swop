import jpex from 'jpex';
import type { UploadDocument } from 'core/payments';
import type { AuthDriver } from 'core/io';

jpex.factory<UploadDocument>(
  (driver: AuthDriver): UploadDocument =>
    async ({ files }) => {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('images', file);
      });

      await driver({
        url: '/users/my/kyc',
        method: 'POST',
        headers: { 'Content-Type': null },
        data: formData,
      });
    },
);
