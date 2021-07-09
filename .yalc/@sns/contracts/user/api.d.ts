import type { OauthProvider } from "./enums";
import type { User } from "./entities";
export interface RefreshTokenRequest {
    token: string;
}
export interface RefreshTokenResponse {
    authToken: string;
    refreshToken: string;
    userId: string;
}
export interface LoginRequest {
    provider: OauthProvider;
    token: string;
}
export declare type LoginResponse = RefreshTokenResponse;
export interface UpdateUserRequest extends Pick<Partial<User>, "username" | "phoneNumber" | "firstName" | "lastName" | "dateOfBirth" | "nationality"> {
    address?: Partial<User["address"]>;
}
export declare type UpdateUserResponse = void;
