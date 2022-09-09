export const QUERY = JSON.stringify({
  query: `query getPinnedRepos {
    user(login: "TonyMckes") {
      pinnedItems(first: 10) {
        nodes {
          ... on Repository {
            id
            name
            description
            homepageUrl
            url
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  id
                  name
                }
              }
              totalCount
            }
          }
        }
      }
    }
  }`,
});
