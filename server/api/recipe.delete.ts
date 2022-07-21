import axios from "axios";

const { BASE_API_DOMAIN } = process.env;

export default async (event): Promise<void> => {
  const { id } = useQuery(event);
  return axios
    .post<void>(`${BASE_API_DOMAIN}`, {
      query: `
        mutation($input: String!) {
          removeRecipe(input: $input) {
          }
        }
      `,
      variables: id,
    })
    .then((response) => response.data)
    .catch(console.error);
};
