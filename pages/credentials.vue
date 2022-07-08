<script setup lang="ts">
const router = useRouter();
const authUser = useUser();

if (authUser.value) {
  router.push('/')
}
watch(authUser, (current) => {
  if (current) {
    router.push('/')
  }
})
</script>

<template>
  <div class="max-w-6xl h-screen m-auto container flex">
    <BackButton />
    <UserCredentials class="w-1/3 p-5" />
    <div class="w-2/3 bg-heroCredential bg-center bg-cover" />
    <p class="fixed bottom-0 right-3">2022 @ <a href="https://vince-amazing.com" target="_blank">vincecao</a></p>
  </div>
</template>
