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
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon-32x32.png' },
    { rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
});

const authUser = useUser();
const auth = useAuth();
const route = useRoute();

onMounted(() => {
  auth.value = getMyAuth();
  onAuthStateChanged(auth.value, (current) => {
    authUser.value = current
  })
})

watch(route, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

</script>

<template>

  <Body class="font-serif bg-gray-50">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <NuxtLayout name="footer" />
  </Body>
</template>