<script setup>
import { marked } from 'marked'
import { debounce } from 'lodash-es'

const input = useState('input', () => '# hello')
const update = debounce((e) => {
  input.value = e.target.value
}, 100)
const output = computed(() => marked(input.value))
</script>

<template>
  <div class="flex min-h-full w-full divide-x divide-solid divide-y-0">
    <textarea class="flex-1 p-5 font-mono resize-none outline-none text-xs border-none bg-slate-800 text-white"
      :value="input" @input="update"></textarea>
    <div class="flex-1 p-5 overflow-y-auto prose lg:prose-xl prose-stone font-editor bg-orange-100" v-html="output"></div>
  </div>
</template>