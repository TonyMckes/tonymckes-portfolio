export const FEATURED_REPOS_QUERY = JSON.stringify({
  query: `query Featured {
    user(login: "TonyMckes") {
      pinnedItems(first: 10) {
        nodes {
          ... on Repository {
            id
            name
            description
            homepageUrl
            url
            isPrivate
            openGraphImageUrl
            usesCustomOpenGraphImage
            repositoryTopics(first: 10) {
              totalCount
              nodes {
                topic {
                  id
                  name
                }
              }
            }
          }
        }
      }
    }
  }`,
})

export const SHOWCASE_REPOS_QUERY = JSON.stringify({
  query: `query Showcase {
    search(query: "topic:showcase user:TonyMckes", type: REPOSITORY, first: 100) {
      nodes {
        ... on Repository {
          id
          name
          description
          homepageUrl
          url
          isPrivate
          openGraphImageUrl
          usesCustomOpenGraphImage
          repositoryTopics(first: 10) {
            totalCount
            nodes {
              topic {
                id
                name
              }
            }
          }
        }
      }
    }
  }`,
})
