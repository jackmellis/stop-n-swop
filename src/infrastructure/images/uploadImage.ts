import jpex from 'jpex';
import type { UploadImage } from 'core/images';
import type { AuthDriver } from 'core/io';

const uploadImage = (driver: AuthDriver): UploadImage => async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  const {
    data: { id },
  } = await driver<any, { id: string }>({
    url: '/images',
    method: 'POST',
    headers: { 'Content-Type': null },
    data: formData,
  });

  return id;
};

jpex.factory<UploadImage>(uploadImage);
