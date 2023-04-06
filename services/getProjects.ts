import { FEATURED_REPOS_QUERY, SHOWCASE_REPOS_QUERY } from 'lib/graphql-query'
import { normalizeData } from 'lib/helpers'
import type {
  FeaturedReposResponse,
  Repository,
  ShowcaseReposResponse,
} from 'types/repositories-types'

const API_URL = 'https://api.github.com/graphql'
const API_TOKEN = process.env.API_TOKEN

if (!API_TOKEN) throw { message: 'Missing API_TOKEN' }

const OPTIONS: RequestInit = {
  headers: new Headers({
    'Content-Type': 'application/json',
    Authorization: API_TOKEN,
  }),
  method: 'POST',
}

export const getFeaturedRepos = async (): Promise<Repository[]> => {
  try {
    const response = await fetch(API_URL, {
      ...OPTIONS,
      body: FEATURED_REPOS_QUERY,
      next: { revalidate: 5 },
    })

    if (!response.ok) throw { message: 'Fetch error' }

    const { data, message }: FeaturedReposResponse = await response.json()
    if (message) throw Error(message)
    const { nodes } = data.user.pinnedItems

    return normalizeData(nodes)
  } catch (error) {
    console.log(error)

    return []
  }
}

export const getShowcaseRepos = async (): Promise<Repository[]> => {
  try {
    const response = await fetch(API_URL, {
      ...OPTIONS,
      body: SHOWCASE_REPOS_QUERY,
      next: { revalidate: 5 },
    })

    if (!response.ok) throw { message: 'Fetch error' }

    const { data, message }: ShowcaseReposResponse = await response.json()
    if (message) throw Error(message)
    const { nodes } = data.search

    return normalizeData(nodes)
  } catch (error) {
    console.log(error)

    return []
  }
}
