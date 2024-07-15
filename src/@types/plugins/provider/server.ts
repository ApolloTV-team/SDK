import type { ProviderQuality, ProviderFormat } from "./types";

export type ProviderServer = {
  id: string;
  name: string;
  description?: string;
};

export type ProviderServerResponse = {
  links: Array<ProviderServerLink>;
  subtitles?: Array<ProviderServerSubtitle>;
  skip_times?: Array<ProviderServerSkipTime>;
  headers?: Record<string, string>;
};

export type ProviderServerLink = {
  url: string;
  quality: ProviderQuality;
  format: ProviderFormat;
};

export type ProviderServerSubtitle = {
  url: string;
  name: string;
  format: ProviderServerSubtitleFormat;
  default: boolean;
  autoselect: boolean;
};

export enum ProviderServerSubtitleFormat {
  vtt,
  srt,
  ass,
}

export type ProviderServerSkipTime = {
  start_time: number;
  end_time: number;
  type: ProviderServerSkipType;
};

export enum ProviderServerSkipType {
  opening,
  ending,
  recap,
}

export type ProviderServerRequest = {
  item_id: string;
  episode_id?: string;
  source_id?: string;
  server_id?: string;
};
