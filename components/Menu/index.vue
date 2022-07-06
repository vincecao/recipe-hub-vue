<script lang="ts" setup>
import { format } from 'date-fns';
import { User, CardSize } from '../../types';

type MenuProps = {
  user: User
}

const { user } = defineProps<MenuProps>()
const { profile: { image, displayName }, foodRecipes, cocktailRecipes } = user

</script>

<template>
  <div class="border border-black my-10 divide-y divide-solid divide-black">
    <span class="grid grid-cols-5 divide-x divide-solid divide-black">
      <div class="flex justify-center items-center">
        <img :src="image" class="w-16 h-16 rounded-full m-auto" />
      </div>
      <div class="col-span-3 text-center p-5">
        <p>{{ format(new Date(), 'Pp') }}</p>
        <p class="uppercase text-4xl font-bold">{{ `${displayName} Food` }}</p>
      </div>
      <div class="flex flex-col justify-center items-center font-bold">
        <p>Last Update:</p>
        <p class="text-xs italic">{{ format(new Date(), 'Pp') }}</p>
      </div>
    </span>

    <span class="grid grid-cols-5 divide-x divide-solid divide-black font-bold text-center">
      <MenuHeadButton label="home" />
      <MenuHeadButton label="about us" />
      <MenuHeadButton label="menu" />
      <MenuHeadButton label="franchise" />
      <MenuHeadButton label="order" />
    </span>

    <span class="grid md:grid-cols-10 md:divide-x divide-y md:divide-y-0 divide-solid divide-black text-center">
      <div class="md:col-span-7 flex">
        <MenuCard :recipe="foodRecipes[0]" :size="CardSize.LARGE" />
      </div>
      <div class="md:col-span-3 flex flex-col divide-y divide-solid divide-black">
        <MenuCard :recipe="cocktailRecipes[0]" />
        <MenuCard :recipe="foodRecipes[0]" />
      </div>
    </span>

    <span class="grid md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-solid divide-black text-center">
      <MenuCard :recipe="cocktailRecipes[0]" />
      <MenuCard :recipe="foodRecipes[0]" />
      <MenuCard :recipe="foodRecipes[0]" />
    </span>

    <span class="grid md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-solid divide-black text-center">
      <MenuCard :recipe="cocktailRecipes[0]" />
      <MenuCard :recipe="foodRecipes[0]" />
      <MenuCard :recipe="foodRecipes[0]" />
    </span>

  </div>
</template>
