import { BadRequestError, UnknownError } from "./common";
export declare enum PaymentErrorCode {
    MISSING_REGISTER_FIELDS = "MISSING_REGISTER_FIELDS",
    FAILED_TO_REGISTER = "FAILED_TO_REGISTER",
    BANK_ACCOUNT_FAIL = "BANK_ACCOUNT_FAIL",
    KYC_DOCUMENT_FAILED = "KYC_DOCUMENT_FAILED",
    KYC_PAGE_TOO_SMALL = "KYC_PAGE_TOO_SMALL",
    KYC_PAGE_FAILED = "KYC_PAGE_FAILED",
    KYC_SUBMIT_FAILED = "KYC_SUBMIT_FAILED"
}
export declare class MissingRegisterFieldsError extends BadRequestError {
    code: PaymentErrorCode;
    toString(): string;
}
export declare class FailedToRegisterError extends UnknownError {
    code: PaymentErrorCode;
    toString(): string;
}
export declare class BankAccountFailError extends UnknownError {
    code: PaymentErrorCode;
}
export declare class KycDocumentFailedError extends UnknownError {
    code: PaymentErrorCode;
}
export declare class KycPageTooSmallError extends BadRequestError {
    code: PaymentErrorCode;
    toString(): string;
}
export declare class KycPageFailedError extends UnknownError {
    code: PaymentErrorCode;
}
export declare class KycSubmitFailedError extends UnknownError {
    code: PaymentErrorCode;
}
