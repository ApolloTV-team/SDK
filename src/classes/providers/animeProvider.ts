import type {
  ProviderAnimeEpisodeResponse,
  ProviderID,
} from "../../@types/plugins/types";
import { BaseProvider } from "./baseProvider";

export abstract class AnimeProvider extends BaseProvider {
  /**
   * This method is responsible for fetching a list of episode options for a given anime ID.
   *
   * @param {ProviderID} anime_id - The anime ID to fetch episode options for.
   * @return {Promise<Array<ProviderAnimeEpisodeResponse>>} A promise that resolves to an array of episode options. Each episode option is represented by a `ProviderAnimeEpisodeResponse` object.
   */
  abstract episodes(
    anime_id: ProviderID
  ): Promise<Array<ProviderAnimeEpisodeResponse>>;
}
