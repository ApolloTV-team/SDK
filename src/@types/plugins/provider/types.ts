export type ProviderID = string;

export enum ProviderExtraSupport {
  discover,
}

type ProviderBaseEpisodeResponse = {
  id: string;
  title: string;
  episode_number: number;
  image?: string;
  description?: string;
  url?: string;
  duration?: number;
  type?: string;
  aired_on?: string;
};

export interface ProviderAnimeEpisodeResponse
  extends ProviderBaseEpisodeResponse {
  alt_title?: string;
  status?: string;
}

export interface ProviderTVEpisodeResponse extends ProviderBaseEpisodeResponse {
  season_number: number;
  status?: string;
}

export enum ProviderQuality {
  automatic,
  "360p",
  "480p",
  "720p",
  "1080p",
  "4k",
}

export enum ProviderFormat {
  mp4,
  hls,
  dash,
}

export type ProviderPagination<T> = {
  page: number;
  total_pages?: number;
  next_page?: number;
  last_page?: number;
  items: Array<T>;
};

// TODO: Add the rest of the types based on ProviderType

export type ProviderInfoResponse = {
  id: string;
  name: string;
  description?: string;
};

export type ProviderSeasonResponse = {
  id: string;
  name: string;
  description?: string;
  number: number;
  image?: string;
};
