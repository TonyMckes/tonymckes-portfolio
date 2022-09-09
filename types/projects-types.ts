import { Repository, Topics } from "./projects-res-types";

export interface Projects extends Omit<Repository, "repositoryTopics"> {
  topics: Topics[];
}
