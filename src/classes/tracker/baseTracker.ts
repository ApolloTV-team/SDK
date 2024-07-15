import { BasePlugin } from "../basePlugin";

export abstract class BaseTracker extends BasePlugin {
  search?(query: string): Promise<any>;

  info?(): Promise<any>;

  abstract mapping(query: string): Promise<string>;
}
