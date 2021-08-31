import { Game } from "./entities";
export interface SearchGamesRequest {
    page?: number;
    q?: string;
    platformIds?: string[];
    available?: boolean;
    group?: boolean;
    favourites?: boolean;
    developerIds?: string[];
    publisherIds?: string[];
}
export interface SearchGamesResponse {
    nextPage: number;
    games: Game[];
}
export declare type GetPopularGamesRequest = {};
export declare type GetPopularGamesResponse = {
    games: Game[];
};
export declare type GetGameParams = {
    gameId: string;
};
export declare type GetGameRequest = void;
export declare type GetGameResponse = Game;
export declare type GetSearchCountsRequest = Omit<SearchGamesRequest, "page" | "group">;
export interface GetSearchCountsResponse {
    total: number;
    platforms: Record<string, number>;
    developers: Record<string, {
        id: string;
        name: string;
        count: number;
    }>;
    publishers: Record<string, {
        id: string;
        name: string;
        count: number;
    }>;
}
export declare type GameViwedParams = {
    productId: string;
};
export declare type GameViewedRequest = void;
export declare type GameViewedResponse = {};
