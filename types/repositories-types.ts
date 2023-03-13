export interface Repositories {
  nodes: RepositoryNode[];
}

//* Featured Query
export type FeaturedReposResponse = {
  data: FeaturedRepos;
};
export interface FeaturedRepos {
  user: {
    pinnedItems: Repositories;
  };
}

//* Showcase Query
export interface ShowcaseReposResponse {
  data: ShowcaseRepos;
}
export interface ShowcaseRepos {
  search: Repositories;
}

//* Normalized
export interface Repository extends Omit<RepositoryNode, "repositoryTopics"> {
  repositoryTopics: Topics;
}
export interface Topics {
  topics: Topic[];
  totalCount: number;
}

//#region Repository
export interface RepositoryNode {
  id: string;
  name: string;
  description: string | undefined;
  homepageUrl: string | undefined;
  url: string | undefined;
  isPrivate: boolean;
  openGraphImageUrl: string | undefined;
  usesCustomOpenGraphImage: boolean;
  repositoryTopics: RepositoryTopics;
}

interface RepositoryTopics {
  nodes: Array<{ topic: Topic }>;
  totalCount: number;
}

export interface Topic {
  id: string;
  name: string;
}
//#endregion
