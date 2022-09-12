export type ResponseJSON = {
  data: ProjectsResponse;
};

export interface ProjectsResponse {
  user: User;
}

interface User {
  pinnedItems: PinnedItems;
}

interface PinnedItems {
  nodes: Repository[];
}

export interface Repository {
  id: string;
  name: string;
  description?: string;
  homepageUrl?: string;
  url?: string;
  repositoryTopics?: RepositoryTopics;
}

interface RepositoryTopics {
  nodes: Topics[];
  totalCount: number;
}

interface Topics {
  topic: Topic;
}

export interface Topic {
  id: string;
  name: string;
}
