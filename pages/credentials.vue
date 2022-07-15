<script setup lang="ts">
</script>

<template>
  <div class="max-w-6xl h-screen m-auto container flex">
    <NuxtLayout name="header">
      <HomeButton />
    </NuxtLayout>
    <UserCredentials class="w-1/3 p-5" />
    <div class="w-2/3 bg-heroCredential bg-center bg-cover" />
  </div>
</template>
