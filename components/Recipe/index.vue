<script setup lang="ts">
import { NEW_RECIPE_MD, getMarkdown } from '@/core'
import { Recipe } from '@/types';
enum View {
  NORMAL = 'normal',
  ADMIN = 'admin',
  EDITOR = 'editor'
}
const route = useRoute();
const viewMode = useState<View>('view');
const markdown = useMarkdown();

const recipes: Recipe[] = useFetch('/api/recipe').data.value;

onMounted(() => {
  if (route.params.id) {
    viewMode.value = View.ADMIN
    markdown.value = getMarkdown(recipes.find(r => r.id === route.params.id))
  } else {
    viewMode.value = View.EDITOR
    markdown.value = getMarkdown(undefined)
  }
})

function completeRecipe() {
  viewMode.value = View.ADMIN
}
</script>

<template>
  <NuxtLayout name="header">
    <BackButton />
    <Button v-if="viewMode !== View.EDITOR" @click="viewMode = View.EDITOR" label="edit" />
    <Button v-if="viewMode === View.EDITOR" @click="completeRecipe" label="complete" />
  </NuxtLayout>
  <div class="flex-1">
    <RecipeView v-if="viewMode === View.ADMIN" />
    <RecipeEditor v-if="viewMode === View.EDITOR" />
  </div>
</template>