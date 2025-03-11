import { IGetProjectsByCategories } from "@/core/interfaces/queries/get-projects-by-portfolio";
import { env } from "@/env";

export const GET_PROJECTS_BY_CATEGORIES = `
  query {
    categories {
      id
      categoryName
      lucideIconSvg
      projects {
        id
        description
        projectUrl
        banner {
          url
        }
      }
    }
  }
`;

export const getProjectsByCategory = async () => {
  const response = await fetch(env.DATABASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.DATABASE_TOKEN_ACCESS}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_PROJECTS_BY_CATEGORIES,
    }),
  });
  const json: IGetProjectsByCategories = await response.json();
  return json.data.categories;
};
