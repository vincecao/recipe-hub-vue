<script setup lang="ts">
type HeadButtonProps = {
  label: string
  active?: boolean
}
const { label, active } = defineProps<HeadButtonProps>();
type HeadButtonEmits = {
  (e: 'click'): void
}
const emit = defineEmits<HeadButtonEmits>();
</script>

<template>
  <button
    :class="`uppercase sm:p-3 p-2 hover:bg-black hover:text-white md:text-base text-xs ${active ? 'bg-black text-white' : ''}`"
    @click="emit('click')">{{ label }}</button>
</template>