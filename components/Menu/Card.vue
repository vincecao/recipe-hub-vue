<script setup lang="ts">
import { CardSize, Recipe } from '@/types'
type CardProps = {
  recipe: Recipe
  size?: CardSize
}
defineProps<CardProps>();

type CardEmits = {
  (e: 'readMore'): void
}
const emit = defineEmits<CardEmits>();
</script>

<template>
  <div v-if="size === CardSize.LARGE" class="flex-1 py-3 flex flex-col justify-center items-center">
    <p class="uppercase sm:text-4xl text-xl font-bold sm:mx-5 mx-3">{{ recipe.title }}</p>
    <p class="sm:my-5 my-2">{{ recipe.description }}</p>
    <div class="sm:m-5 m-3">
      <img :src="recipe.imagesSrc[0]" class="w-full" />
    </div>
    <span class="flex w-full justify-end">
      <Button label="read more" @click="emit('readMore')"/>
    </span>

  </div>
  <div v-else class="flex-1 py-3 flex flex-col justify-center items-center">
    <p class="uppercase text-xl font-bold mx-3">{{ recipe.title }}</p>
    <p class="sm:my-5 my-2">{{ recipe.description }}</p>
    <div class="m-3">
      <img :src="recipe.imagesSrc[0]" class="w-full" />
    </div>
    <span class="flex w-full justify-end">
      <Button label="read more" @click="emit('readMore')"/>
    </span>
  </div>
</template>

<style scoped>
img {
  filter: grayscale(0.4) saturate(0.8) contrast(0.9) opacity(0.9)
}
</style>