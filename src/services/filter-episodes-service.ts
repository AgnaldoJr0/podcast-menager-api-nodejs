import { repositoryPodcast } from "../repositories/podcasts-repository";
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisode = async (podcastName: string | null): Promise<PodcastTransferModel> => {
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [],
      };
    
    const data = await repositoryPodcast(podcastName || "");
    
    responseFormat = {
    statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NotFound,
    body: data,
  };

  return responseFormat;
}