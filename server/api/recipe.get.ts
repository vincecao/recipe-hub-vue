import { Recipe } from "@/types";
import data from '@/constants/MOCK_DATABASE.json'

export default defineEventHandler((event): Recipe[] => {
  return data as Recipe[];
});
