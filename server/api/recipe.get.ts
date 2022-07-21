import { Recipe } from "@/types";
import axios from "axios";

const { BASE_API_DOMAIN } = process.env;

export default defineEventHandler((event): Promise<Recipe[] | void> => {
  return axios
    .post<Recipe[]>(`${BASE_API_DOMAIN}`, {
      query: ` 
        query {
          recipes {
            id
            title
            description
            imagesSrc
            markdownSrc
            type
          }
        }
      `,
    })
    .then((response) => response.data['data']['recipes'])
    .catch(console.error);
});
