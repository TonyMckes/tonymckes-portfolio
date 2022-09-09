import { ProjectsResponse } from "types/projects-res-types";
import { Projects } from "types/projects-types";

export const sanitizeData = (data: ProjectsResponse): Projects[] => {
  const repositories = data.user.pinnedItems.nodes.map((repository) => {
    let topics;

    if (repository.repositoryTopics) {
      topics = repository.repositoryTopics.nodes;

      delete repository.repositoryTopics;
    }

    return { ...repository, topics } as Projects;
  });

  return repositories;
};
