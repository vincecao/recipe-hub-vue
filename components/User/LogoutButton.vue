<script setup lang="ts">
import { signOutUser } from "~~/core/firebase";

const authUser = useUser();

function logoutUser() {
  signOutUser().then(() => {
    authUser.value = undefined
  })
}

</script>

<template>
  <Button @click="logoutUser" label="Logout" />
</template>