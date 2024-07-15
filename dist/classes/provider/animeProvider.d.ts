import type { ProviderID, ProviderAnimeEpisodeResponse } from "../../@types";
import { BaseProvider } from "./baseProvider";
export declare abstract class AnimeProvider extends BaseProvider {
    /**
     * This method is responsible for fetching a list of episode options for a given anime ID.
     *
     * @param {ProviderID} anime_id - The anime ID to fetch episode options for.
     * @return {Promise<Array<ProviderAnimeEpisodeResponse>>} A promise that resolves to an array of episode options. Each episode option is represented by a `ProviderAnimeEpisodeResponse` object.
     */
    abstract episodes(anime_id: ProviderID): Promise<Array<ProviderAnimeEpisodeResponse>>;
}
//# sourceMappingURL=animeProvider.d.ts.map