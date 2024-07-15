import type { ProviderExtraSupport, ProviderID, ProviderInfoResponse, ProviderPagination, ProviderSearchResponse, ProviderServerRequest, ProviderServerResponse, ProviderSourceRequest, ProviderSourceResponse, SearchQuery } from "../../@types";
import { BasePlugin } from "../basePlugin";
export declare abstract class BaseProvider extends BasePlugin {
    /**
     * This method is responsible for providing extra support for the provider.
     *
     * @return {Array<ProviderExtraSupport>} An array of extra support options for the provider.
     * @see ProviderExtraSupport
     * @default []
     * @example
     * return [ProviderExtraSupport.discover];
     */
    abstract readonly extra_support?: Array<ProviderExtraSupport>;
    /**
     * This method is responsible for performing a search using the plugin's search provider.
     *
     * @param {SearchQuery} query - The search query object containing information about the search to be performed.
     * @return {Promise<Array<ProviderPagination<ProviderSearchResponse>>>} A promise that resolves to an array of paginated search results. Each search result is represented by a `ProviderSearchResponse` object, and the search results are paginated using a `ProviderPagination` object.
     */
    abstract search(query: SearchQuery): Promise<Array<ProviderPagination<ProviderSearchResponse>>>;
    /**
     * This method is responsible for fetching the metadata for a given provider.
     *
     * @param {ProviderID} id - The provider ID to fetch metadata for.
     * @return {Promise<Array<ProviderInfoResponse>>} A promise that resolves to an array of metadata objects. Each metadata object is represented by a `ProviderInfoResponse` object.
     */
    abstract info(id: ProviderID): Promise<Array<ProviderInfoResponse>>;
    /**
     * This method is responsible for fetching a list of source options for a given request.
     *
     * @param {ProviderSourceRequest} request - The request object containing information about the source options to fetch.
     * @return {Promise<Array<ProviderSourceResponse>>} A promise that resolves to an array of source options. Each source option is represented by a `ProviderSourceResponse` object.
     */
    abstract sources(request: ProviderSourceRequest): Promise<Array<ProviderSourceResponse>>;
    /**
     * This method is responsible for fetching a list of server options for a given request.
     *
     * @param {ProviderServerRequest} request - The request object containing information about the server options to fetch.
     * @return {Promise<Array<ProviderServerResponse>>} A promise that resolves to an array of server options. Each server option is represented by a `ProviderServerResponse` object.
     */
    abstract servers(request: ProviderServerRequest): Promise<Array<ProviderServerResponse>>;
}
//# sourceMappingURL=baseProvider.d.ts.map