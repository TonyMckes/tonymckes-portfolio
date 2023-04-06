import type { NextApiRequest, NextApiResponse } from 'next'
import { getFeaturedRepos } from 'services/getProjects'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  try {
    if (method === 'GET') {
      const projects = await getFeaturedRepos()

      res.status(200).json(projects)
    }
  } catch (error) {
    console.log(error)
  }
}
