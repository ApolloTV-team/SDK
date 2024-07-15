export enum PluginType {
  "tv",
  "anime",
  "movie",
  "video",
  "book",
  "all",
  "multi",
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
