import type {
  ProviderAnimeEpisodeResponse,
  ProviderID,
  ProviderSeasonResponse,
} from "../../@types";
import { BaseProvider } from "./baseProvider";

export abstract class TvProvider extends BaseProvider {
  /**
   * This method is responsible for fetching a list of season options for a given TV show ID.
   *
   * @param {ProviderID} tv_id - The TV show ID to fetch season options for.
   * @return {Promise<Array<ProviderSeasonResponse>>} A promise that resolves to an array of season options. Each season option is represented by a `ProviderSeasonResponse` object.
   */
  abstract seasons(tv_id: ProviderID): Promise<Array<ProviderSeasonResponse>>;

  /**
   * This method is responsible for fetching a list of episode options for a given request.
   *
   * @param {number} season_number - The season number to fetch episode options for.
   * @param {ProviderID} tv_id - The TV show ID to fetch episode options for.
   * @return {Promise<Array<ProviderAnimeEpisodeResponse>>} A promise that resolves to an array of episode options. Each episode option is represented by a `ProviderAnimeEpisodeResponse` object.
   */
  abstract episodes(
    season_number: number,
    tv_id: ProviderID
  ): Promise<Array<ProviderAnimeEpisodeResponse>>;
}
