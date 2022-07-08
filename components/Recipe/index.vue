<script setup lang="ts">
enum View {
  NORMAL = 'normal',
  ADMIN = 'admin',
  EDITOR = 'editor'
}
const route = useRoute();
const router = useRouter();
const viewMode = useState<View>('view')
const markdown = useState<string>('markdown')

if (route.params.id) {
  viewMode.value = View.ADMIN
  markdown.value = `
id: ${route.params.id}

# Pizza Fingers
## Ingredients:

- Pizza dough — homemade or bought (make sure it’s vegan)
- Pizza sauce/passata — homemade or bought (make sure it’s vegan)
- Daiya mozzarella style cheese shreds
- Tofurky sausages, sliced
- Mixed vegetables, sliced

## Instructions:

1. Split the dough into small balls; then roll out into discs.
2. Evenly spread a small amount of the tomato sauce across each disc; then sprinkle with the Daiya mozzarella cheese.
3. Top with sliced Tofurky sausage or mixed vegetables.
4. Oven cook at 180 °C/356 °F for 10–12 minutes.
5. Cool and serve.

### Source
- [simple-food-sampling-recipe-ideas](https://vegfund.org/helpful-material/simple-food-sampling-recipe-ideas)
`
} else {
  viewMode.value = View.EDITOR
  markdown.value = `
# My new recipe

Add your step and picture here..
`
}

function completeRecipe() {
  console.log(markdown.value);
  viewMode.value = View.ADMIN
}
</script>

<template>
  <span class="fixed top-0 left-0 right-0 flex space-x-2 p-3 justify-between">
    <BackButton />
    <Button v-if="viewMode !== View.EDITOR" @click="viewMode = View.EDITOR" label="edit" />
    <Button v-if="viewMode === View.EDITOR" @click="completeRecipe" label="complete" />
  </span>
  <div class="flex-1 mt-12">
    <RecipeView v-if="viewMode === View.ADMIN" :markdown="markdown" />
    <RecipeEditor v-if="viewMode === View.EDITOR" :markdown="markdown" @edit="(md) => markdown = md" />
  </div>
</template>