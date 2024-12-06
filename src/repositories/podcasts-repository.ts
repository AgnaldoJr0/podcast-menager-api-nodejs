import fs from "fs";
import path from "path";
import PodcastModel from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    const language = "utf-8";

    const rawData = fs.readFileSync(pathData, language)
    let jsonFile = JSON.parse(rawData);
    console.log("Podcast Name to Filter:", podcastName);
    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    }
    console.log("Filtered Podcasts:", jsonFile);
    return jsonFile;
}
