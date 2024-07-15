export type ProviderID = string;
export declare enum ProviderExtraSupport {
    discover = 0
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
export interface ProviderAnimeEpisodeResponse extends ProviderBaseEpisodeResponse {
    alt_title?: string;
    status?: string;
}
export interface ProviderTVEpisodeResponse extends ProviderBaseEpisodeResponse {
    season_number: number;
    status?: string;
}
export declare enum ProviderQuality {
    automatic = 0,
    "360p" = 1,
    "480p" = 2,
    "720p" = 3,
    "1080p" = 4,
    "4k" = 5
}
export declare enum ProviderFormat {
    mp4 = 0,
    hls = 1,
    dash = 2
}
export type ProviderPagination<T> = {
    page: number;
    total_pages?: number;
    next_page?: number;
    last_page?: number;
    items: Array<T>;
};
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
export {};
//# sourceMappingURL=types.d.ts.map