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

export interface Topics {
  topic: Topic;
}

interface Topic {
  id: string;
  name: string;
}
