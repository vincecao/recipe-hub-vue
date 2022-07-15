<script setup lang="ts">
import { marked } from 'marked';

const markdown = useMarkdown();
const output = computed(() => marked(markdown.value));
</script>

<template>
  <div class="w-full h-full bg-orange-50 pt-12">
    <div class="m-auto p-5 overflow-y-auto prose lg:prose-xl prose-stone font-editor" v-html="output" />
  </div>
</template>