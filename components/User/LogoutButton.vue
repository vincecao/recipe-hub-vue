<script setup lang="ts">
import { signOutUser } from "@/core/firebase";
import { onImageError } from '@/core';

const authUser = useUser();

function logoutUser() {
  signOutUser().then(() => {
    authUser.value = undefined;
  });
}

</script>

<template>
  <span class="flex h-full">
    <img :src="authUser.photoURL" class="w-10 h-10 m-auto" @error="onImageError"/>
    <Button @click="logoutUser" label="Logout" />
  </span>
</template>