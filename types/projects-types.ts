import type { Repository, Topic } from "./projects-res-types";

export interface Projects {
  projects: ProjectData[];
}
export interface ProjectData extends Omit<Repository, "repositoryTopics"> {
  topics: Topic[];
}
