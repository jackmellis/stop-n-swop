import type { Game } from '@sns/contracts/product';

export type SearchGames = (args: {
  search: string;
  platforms: string[];
  developers: string[];
  publishers: string[];
  available: boolean;
  page: number;
  group: boolean;
  favourites: boolean;
}) => Promise<{
  nextPage: number;
  games: Game[];
}>;

export type FetchCounts = (
  args: Omit<Parameters<SearchGames>[0], 'group' | 'page'>,
) => Promise<{
  total: number;
  platforms: Record<string, number>;
  developers: Record<string, { id: string; name: string; count: number }>;
  publishers: Record<string, { id: string; name: string; count: number }>;
}>;

export type FetchPopularGames = () => Promise<Game[]>;

export type FetchGame = (args: { id: string }) => Promise<Game>;

export type TrackGameView = (args: { id: string }) => Promise<void>;
