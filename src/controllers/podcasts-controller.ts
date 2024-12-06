import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisode } from "../services/list-episodes-service";
import { serviceFilterEpisode } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const defaultContent = { "Content-Type": ContentType.JSON };


export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisode();

  response.writeHead(content.statusCode, defaultContent);
  response.write(JSON.stringify(content.body));

  response.end();
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const url = new URL(request.url || "", `http://${request.headers.host}`);
  const podcastName = url.searchParams.get("v");

  console.log("Podcast Name:", podcastName);
  const content: PodcastTransferModel = await serviceFilterEpisode(podcastName);

  response.writeHead(content.statusCode, defaultContent);
  response.write(JSON.stringify(content.body));

  response.end();
};
