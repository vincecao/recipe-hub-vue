<script lang="ts" setup>
useHead({
  title: "Recipe Hub - Organize and share your recipes in one site",
  meta: [
    {
      name: "description",
      content:
        "A place to sharing your fav food and cocktail recipes with your friends",
    },
  ],
});
</script>

<template>

  <Body class="font-serif bg-gray-50">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>