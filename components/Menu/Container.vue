<script lang="ts" setup>
import { Recipe } from '@/types';

const authUser = useUser();
const recipes: Recipe[] = useFetch('/api/recipe').data.value;
</script>

<template>
  <div v-if="authUser" class="max-w-6xl m-auto container bg-orange-50 sm:mt-16 py-10 sm:py-8 sm:px-8 shadow-2xl">
    <Menu :recipes="recipes" />
  </div>
</template>
