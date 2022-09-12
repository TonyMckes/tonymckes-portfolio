import type { ProjectsResponse, Topic } from "types/projects-res-types";
import type { ProjectData, Projects } from "types/projects-types";

export const sanitizeData = (data: ProjectsResponse): Projects => {
  const repositories = data.user.pinnedItems.nodes.map((repository) => {
    let topics: Topic[] = [];

    if (repository.repositoryTopics) {
      topics = repository.repositoryTopics.nodes.map(({ topic }) => topic);

      delete repository.repositoryTopics;
    }
    return { ...repository, topics } as ProjectData;
  });

  return { projects: repositories };
};
