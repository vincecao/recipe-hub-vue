import { ExistingRecipe, NewRecipe, Recipe, RecipeType } from "@/types";

export function onImageError(event) {
  event.target.src =
    "https://res.cloudinary.com/practicaldev/image/fetch/s--Yt0oKe5h--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/vp14z4vkbhv1d14v9sty.png"; // "~/assets/image/user_place_holder.jpeg"
}

export function isNewRecipe(recipe: Recipe): recipe is NewRecipe {
  return !recipe.id;
}

export function getMarkdown(recipe: ExistingRecipe | undefined) {
  const current = recipe || NEW_RECIPE;
  let md = String(current.markdownSrc);
  let count = 0;
  while (md.includes("IMAGE")) {
    md = md.replace(/IMAGE/, current.imagesSrc[count] || '');
    count++;
  }
  return md;
}

export const NEW_RECIPE_MD = `# My new recipe

Add your step and picture on left panel...

_Check following sample._

## Pizza Fingers
### Ingredients:

- Pizza dough — homemade or bought (make sure it’s vegan)
- Pizza sauce/passata — homemade or bought (make sure it’s vegan)
- Daiya mozzarella style cheese shreds
- Tofurky sausages, sliced
- Mixed vegetables, sliced

![](IMAGE)

### Instructions:

1. Split the dough into small balls; then roll out into discs.
2. Evenly spread a small amount of the tomato sauce across each disc; then sprinkle with the Daiya mozzarella cheese.
3. Top with sliced Tofurky sausage or mixed vegetables.
4. Oven cook at 180 °C/356 °F for 10–12 minutes.
5. Cool and serve.

![](IMAGE)


#### Source
- [simple-food-sampling-recipe-ideas](https://vegfund.org/helpful-material/simple-food-sampling-recipe-ideas)
- [unsplash](https://unsplash.com/photos/_4j4odf9FsU)
` as const;

export const NEW_RECIPE = {
  id: undefined,
  title: "My new recipe",
  description: "",
  imagesSrc: [
    "https://images.unsplash.com/photo-1611877606259-725d2b5c3a3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1572552635104-daf938e0aa1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  ],
  markdownSrc: NEW_RECIPE_MD,
  type: RecipeType.FOOD,
} as const;
