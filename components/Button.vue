<script setup lang="ts">
type ButtonProps = {
  label: string
}
const { label } = defineProps<ButtonProps>();
</script>

<template>
  <button class="uppercase p-1 px-2 text-xs bg-black text-white hover:opacity-60">{{ label }}</button>
</template>