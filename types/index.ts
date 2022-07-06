export type User = {
  profile: Profile;
  foodRecipes: Recipe[];
  cocktailRecipes: Recipe[];
};

export type Profile = {
  image: string;
  fullName: string;
  displayName: string;
  gender: "male" | "female";
  location: string;
  createAt: Date;
};

export type Recipe = {
  title: string;
  id: string;
  description: string;
  imagesSrc: string[];
  markdownSrc: string;
};

export enum CardSize {
  SMALL = "small",
  LARGE = "large",
}
