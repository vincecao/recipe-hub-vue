<script setup lang="ts">
const router = useRouter();
</script>

<template>
  <Button @click="router.push('/credentials')" label="Login" />
</template>