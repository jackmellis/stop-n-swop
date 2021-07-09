import { BadRequestError, UnknownError } from "./common";
export declare enum PaymentErrorCode {
    MISSING_REGISTER_FIELDS = "MISSING_REGISTER_FIELDS",
    FAILED_TO_REGISTER = "FAILED_TO_REGISTER"
}
export declare class MissingRegisterFieldsError extends BadRequestError {
    code: PaymentErrorCode;
    toString(): string;
}
export declare class FailedToRegisterError extends UnknownError {
    code: PaymentErrorCode;
    toString(): string;
}
