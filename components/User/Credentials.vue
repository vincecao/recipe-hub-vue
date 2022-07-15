<script setup lang="ts">
const authUser = useUser();
</script>

<template>
  <div class="space-y-5 bg-white border w-1/2 m-5">
    <div v-if="!authUser">
      <p class="text-3xl mt-10 mb-3">Recipe Hub</p>
      <p class="mt-3 mb-8 italic">Sharing your favorite food and cocktail with friends!</p>
      <UserLogin />
      <hr />
      <UserGoogleLogin />
    </div>
    <div v-if="authUser" class="flex justify-center flex-col space-y-2">
      <img :src="authUser.photoURL" class="w-10 h-10 rounded-full" />
      <p>Welcome <span class="italic">{{ authUser.displayName }}</span>,</p>
      <p>You have already logged in. Please <NuxtLink class="underline" href="/">redirect</NuxtLink> to main page here.
      </p>
    </div>
  </div>

</template>