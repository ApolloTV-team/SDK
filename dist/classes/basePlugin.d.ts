import type { PluginMetadata } from "../@types";
import type { Request } from "../utils";
export declare abstract class BasePlugin {
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
    /**
     * This property holds the request object that is used by the plugin.
     * It is a protected property, meaning it can only be accessed within the plugin class itself.
     *
     * @type {Request} The request object used by the plugin.
     */
    protected abstract request: Request;
}
//# sourceMappingURL=basePlugin.d.ts.map