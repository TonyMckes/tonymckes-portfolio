import { QUERY } from "lib/graphql-query";
import { sanitizeData } from "lib/helpers";
import { ResponseJSON } from "types/projects-res-types";

const API_URL = "https://api.github.com/graphql";
const API_TOKEN = process.env.API_TOKEN;

if (!API_TOKEN) throw { message: "Missing API_TOKEN" };

const OPTIONS: RequestInit = {
  body: QUERY,
  headers: new Headers({
    "Content-Type": "application/json",
    Authorization: API_TOKEN,
  }),
  method: "POST",
};

export const getProjects = async () => {
  try {
    const response = await fetch(API_URL, OPTIONS);

    if (!response.ok) throw { message: "Fetch error" };

    const { data }: ResponseJSON = await response.json();

    return sanitizeData(data);
  } catch (error) {
    console.log(error);

    return { projects: [] };
  }
};
