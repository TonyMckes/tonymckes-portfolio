import { normalizeData, normalizeTopics } from 'lib/helpers'
import { Repository, RepositoryNode } from 'types/repositories-types'

const baseMock = {
  id: '0001',
  name: '',
  description: '',
  homepageUrl: '',
  url: '',
  isPrivate: true,
  openGraphImageUrl: '',
  usesCustomOpenGraphImage: false,
}
const topicMock = {
  id: '0001',
  name: 'Testing',
}

const repositoryNodeMock: RepositoryNode = {
  ...baseMock,
  repositoryTopics: {
    nodes: [{ topic: topicMock }],
    totalCount: 1,
  },
}

const repositoryMock: Repository = {
  ...baseMock,
  repositoryTopics: {
    topics: [{ ...topicMock }],
    totalCount: 1,
  },
}

describe('Helpers: repositories data normalizer', () => {
  it('should return a matching mock', () => {
    const topics = normalizeTopics(repositoryNodeMock)

    expect(topics).toMatchObject(repositoryMock.repositoryTopics)
  })

  it('should return a matching mock', () => {
    const [repositories] = normalizeData([repositoryNodeMock])

    expect(repositories).toMatchObject(repositoryMock)
  })
})
