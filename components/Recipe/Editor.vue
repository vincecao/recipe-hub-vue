<script setup lang="ts">
import { marked } from 'marked'
import { debounce } from 'lodash-es'

// type RecipeEditorEmits = { (e: 'edit', md: string): void }
// const emit = defineEmits<RecipeEditorEmits>()
const markdown = useMarkdown()

const update = debounce((e) => {
  markdown.value = e.target.value
  // emit('edit', e.target.value)
}, 100)
const output = computed(() => marked(markdown.value))
</script>

<template>
  <div class="flex min-h-full w-full divide-x divide-solid divide-y-0">
    <textarea class="flex-1 p-5 font-mono resize-none outline-none text-xs border-none bg-slate-800 text-white pt-12"
      :value="markdown" @input="update" />
    <div class="flex-1 p-5 bg-orange-50 pt-12">
      <div class="w-full h-full m-auto prose lg:prose-xl prose-stone font-editor" v-html="output" />
    </div>
  </div>
</template>