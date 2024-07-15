export declare enum PluginType {
    "tv" = 0,
    "anime" = 1,
    "movie" = 2,
    "video" = 3,
    "book" = 4,
    "all" = 5,
    "multi" = 6
}
export interface PluginMetadata {
    name: string;
    version: string;
    type: Array<PluginType>;
    creator?: {
        name: string;
        url?: string;
        image?: string;
        github?: {
            username: string;
            url?: string;
        };
    };
}
//# sourceMappingURL=types.d.ts.map