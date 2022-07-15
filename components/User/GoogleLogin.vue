<script setup lang="ts">
import { getUserFromGoogle } from '@/core/firebase';

const authUser = useUser();

function loginUserFromGoogle() {
  getUserFromGoogle().then(({ result: { user } }) => {
    authUser.value = user
  })
}
</script>

<template>
  <div class="my-2">
    <button class="w-full h-8 flex justify-center" @click="loginUserFromGoogle">
      <img class="h-full" src="~/assets/image/btn_google_signin_dark_normal_web@2x.png"/>
    </button>
  </div>
</template>