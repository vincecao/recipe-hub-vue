<script lang="ts" setup>
useHead({
  title: "Menu Hub - Sharing your best menu",
  meta: [
    {
      name: "description",
      content:
        "A place to sharing your menu and cocktail recipe with your friends",
    },
  ],
});
</script>

<template>
  <Body class="max-w-6xl m-auto font-display">
    <div class="container m-auto">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </Body>
</template>