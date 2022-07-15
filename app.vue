<script lang="ts" setup>
import { onAuthStateChanged } from '@firebase/auth';
import { getMyAuth } from './core/firebase';

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

const authUser = useUser();
const auth = useAuth();

onMounted(() => {
  auth.value = getMyAuth();
  onAuthStateChanged(auth.value, (current) => {
    authUser.value = current
  })
})
</script>

<template>
  <Body class="font-serif bg-gray-50">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>