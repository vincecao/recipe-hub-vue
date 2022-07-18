
type Modify<T, R> = Omit<T, keyof R> & R;

export enum RecipeType {
  FOOD = "food",
  COCKTAIL = "cocktail",
}

export type NewRecipe = {
  id: undefined;
  title: string;
  description: string;
  imagesSrc: string[];
  markdownSrc: string;
  type: RecipeType;
};

export type ExistingRecipe = Modify<NewRecipe, { id: string }>;

export type Recipe = ExistingRecipe | NewRecipe;
