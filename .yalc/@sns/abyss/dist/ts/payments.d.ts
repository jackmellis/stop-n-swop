import { BadRequestError, UnknownError } from "./common";
export declare enum PaymentErrorCode {
    MISSING_REGISTER_FIELDS = "MISSING_REGISTER_FIELDS",
    FAILED_TO_REGISTER = "FAILED_TO_REGISTER",
    BANK_ACCOUNT_FAIL = "BANK_ACCOUNT_FAIL"
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
