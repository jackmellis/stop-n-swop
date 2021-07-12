import type { SaveBankDetailsRequest } from '@sns/contracts/payment';

export type SaveBankDetails = (args: SaveBankDetailsRequest) => Promise<void>;

export type UploadDocument = (args: { files: File[] }) => Promise<void>;
