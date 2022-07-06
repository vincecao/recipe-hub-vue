<script setup lang="ts">
import { marked } from 'marked'

type RecipeViewProps = { markdown: string }
const { markdown } = defineProps<RecipeViewProps>();
const output = computed(() => marked(markdown))
</script>

<template>
  <div class="w-full h-full bg-orange-50">
    <div class="m-auto p-5 overflow-y-auto prose lg:prose-xl prose-stone font-editor" v-html="output" />
  </div>
</template>