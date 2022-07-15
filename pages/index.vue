<script lang="ts" setup>
import { Recipe } from '~~/types';

const authUser = useUser();
const recipes: Recipe[] = useFetch('/api/recipe').data.value;
const router = useRouter();
</script>

<template>
  <div class="max-w-6xl m-auto container bg-orange-50 sm:mt-16 py-10 sm:py-8 sm:px-8 shadow-2xl">
    <Menu v-if="authUser" :recipes="recipes" />
    <Button v-if="!authUser" label="Go to Login page" @click="router.push('/credentials')"/>
  </div>
</template>
