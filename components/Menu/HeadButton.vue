<script setup lang="ts">
type HeadButtonProps = {
  label: string
}
const { label } = defineProps<HeadButtonProps>();
</script>

<template>
  <button class="uppercase p-3 hover:bg-black hover:text-white">{{ label }}</button>
</template>