<script setup lang="ts">
const authUser = useUser();
</script>

<template>
  <div class="space-y-5 bg-white border w-1/2 m-5">
    <p class="text-3xl mt-10 mb-3">Recipe Hub</p>
    <p class="mt-3 mb-8 italic">Sharing your favorite food and cocktail with friends!</p>
    <UserLogin />
    <hr />
    <UserGoogleLogin />
  </div>
</template>