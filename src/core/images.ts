import type { ImageUrl } from 'domain/types';

export type UploadImage = (file: File) => Promise<ImageUrl>;
