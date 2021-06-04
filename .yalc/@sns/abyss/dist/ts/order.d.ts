import { BadRequestError, NotAuthorisedError, NotFoundError } from "./common";
export declare enum OrderErrorCode {
    ORDER_NOT_FOUND = "ORDER_NOT_FOUND",
    ORDER_NOT_OWNED_BY_USER = "ORDER_NOT_OWNED_BY_USER",
    INVALID_TRANSITION = "INVALID_TRANSITION"
}
export declare class OrderNotFoundError extends NotFoundError {
    code: OrderErrorCode;
    constructor(id: string);
}
export declare class OrderNotOwnedByUserError extends NotAuthorisedError {
    code: OrderErrorCode;
    constructor(userId: string, listingId: string);
    toString(): string;
}
export declare class InvalidStatusError extends BadRequestError {
    code: OrderErrorCode;
    toString(): string;
}
