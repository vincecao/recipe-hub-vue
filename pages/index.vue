<script lang="ts" setup>
const authUser = useUser();
</script>

<template>
  <div>
    <NuxtLayout name="header">
      <div />
      <UserLoginButton v-if="!authUser" />
      <UserLogoutButton v-if="authUser" />
    </NuxtLayout>
    <div>
      <MenuContainer />
      <IndexContainer />
    </div>
  </div>
</template>
