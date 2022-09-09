import type { NextApiRequest, NextApiResponse } from "next";
import { getProjects } from "services/getProjects";
import { Projects } from "types/projects-types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    if (method === "GET") {
      const projects = await getProjects();

      res.status(200).json(projects);
    }
  } catch (error) {
    console.log(error);
  }
}
