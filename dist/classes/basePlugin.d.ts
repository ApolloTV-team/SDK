import type { PluginMetadata } from "../@types";
import { Request } from "../utils";
export declare abstract class BasePlugin extends Request {
    abstract readonly metadata: PluginMetadata;
    /**
     * This method is responsible for initializing the plugin.
     * It is called when the plugin is registered with the plugin manager.
     *
     * @return {void} This function does not return anything.
     */
    abstract initialize(): void;
    /**
     * This method is responsible for cleaning up and destroying the plugin.
     * It is called when the plugin is unregistered from the plugin manager.
     *
     * @return {void} This function does not return anything.
     */
    abstract destroy(): void;
    /**
     * This method is responsible for rendering the plugin's settings interface.
     * It is called when the plugin's settings panel is opened.
     *
     * @return {JSX.Element} The JSX element representing the plugin's settings interface.
     */
    abstract settings(): JSX.Element;
}
//# sourceMappingURL=basePlugin.d.ts.map