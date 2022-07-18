import { getDatabase } from "firebase-admin/database";

import { ExistingRecipe, NewRecipe, Recipe } from "./type";

export function isNewRecipe(recipe: Recipe): recipe is NewRecipe {
  return !recipe.id;
}

export async function createRecipe(recipe: ExistingRecipe): Promise<void> {
  await getDatabase().ref("recipes").push(recipe);
}

export async function getRecipes(): Promise<ExistingRecipe[]> {
  const result = await getDatabase()
      .ref("recipes")
      .once("value")
      .then((snapshot) => {
        const val = snapshot.val();
        const recipes: ExistingRecipe[] = Object.keys(val).map((key) => val[key]);
        return recipes;
      });
  return result;
}

export async function updateRecipe(recipe: ExistingRecipe): Promise<void> {
  await getDatabase()
      .ref("recipes")
      .orderByChild("id")
      .equalTo(recipe.id)
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          childSnapshot.ref.set(recipe);
        });
      });
}

export async function removeRecipe(id: string): Promise<void> {
  await getDatabase()
      .ref("recipes")
      .orderByChild("id")
      .equalTo(id)
      .once("value")
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          childSnapshot.ref.remove();
        });
      });
}
