import { twMerge, type ClassNameValue } from 'tailwind-merge'
import type {
  Repository,
  RepositoryNode,
  Topics,
} from 'types/repositories-types'

export function normalizeTopics({
  repositoryTopics,
}: Pick<RepositoryNode, 'repositoryTopics'>): Topics {
  const { nodes, totalCount } = repositoryTopics
  const topics = nodes.map(({ topic: { id, name } }) => ({ id, name }))

  return { totalCount, topics }
}

export const normalizeData = (nodes: RepositoryNode[]): Repository[] => {
  const repositories = nodes.map((repository): Repository => {
    const repositoryTopics = normalizeTopics(repository)

    return { ...repository, repositoryTopics }
  })

  return repositories
}

export function tw(...classes: ClassNameValue[]) {
  return twMerge(classes)
}
