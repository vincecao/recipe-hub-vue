import axios from "axios";
import { ExistingRecipe } from "@/types";

const { BASE_API_DOMAIN } = process.env;

export default async (event): Promise<void> => {
  const body = await useBody<ExistingRecipe>(event);
  return axios
    .post<void>(`${BASE_API_DOMAIN}`, {
      query: `
        mutation($input: RecipeInput!) {
          updateRecipe(input: $input) {
            id
            title
            description
            imagesSrc
            markdownSrc
            type
          }
        }
      `,
      variables: body,
    })
    .then((response) => response.data)
    .catch(console.error);
};
