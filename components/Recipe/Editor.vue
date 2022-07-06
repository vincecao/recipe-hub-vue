<script setup lang="ts">
import { marked } from 'marked'
import { debounce } from 'lodash-es'

type RecipeEditorProps = { markdown: string }
const { markdown } = defineProps<RecipeEditorProps>();

type RecipeEditorEmits = { (e: 'edit', md: string): void }
const emit = defineEmits<RecipeEditorEmits>()
const input = useState<string>('input');
input.value = markdown;

const update = debounce((e) => {
  input.value = e.target.value
  emit('edit', e.target.value)
}, 100)
const output = computed(() => marked(input.value))
</script>

<template>
  <div class="flex min-h-full w-full divide-x divide-solid divide-y-0">
    <textarea class="flex-1 p-5 font-mono resize-none outline-none text-xs border-none bg-slate-800 text-white"
      :value="input" @input="update" />
    <div class="flex-1 p-5 bg-orange-50">
      <div class="w-full h-full m-auto prose lg:prose-xl prose-stone font-editor" v-html="output" />
    </div>
  </div>
</template>