<script lang="ts" setup>
import { format } from 'date-fns';
import { User, CardSize } from '../../types';

type MenuProps = {
  user: User
}

const { user } = defineProps<MenuProps>();
const router = useRouter();
const { profile: { image, displayName }, foodRecipes, cocktailRecipes } = user;

function clickMenuButton(label: string) {
  console.log(label + ' clicked');
  if (label === 'create') {
    router.push({ path: `/recipe` });
  }
}

function clickCardReadMore(id: string) {
  router.push({ path: `/recipe/${id}` });
}
</script>

<template>
  <div class="border border-black divide-y divide-solid divide-black">
    <span>
      <span class="sm:hidden grid grid-cols-5 justify-center items-center divide-x divide-black divide-solid">
        <div class="col-span-3 text-center text-sm my-1">
          <p>{{ format(new Date(), 'Pp') }}</p>
          <p class="uppercase text-2xl font-bold">{{ `${displayName} Food` }}</p>
        </div>
        <div class="col-span-2 flex justify-center items-center space-x-3">
          <img :src="image" class="w-6 h-6 rounded-full" />
          <div class="flex flex-col justify-center items-center font-bold capitalize">
            <p>last update:</p>
            <p class="text-xs italic">{{ format(new Date(), 'Pp') }}</p>
          </div>
        </div>
      </span>
      <span class="hidden sm:grid grid-cols-5 divide-x divide-solid divide-black">
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
    </span>

    <span class="grid grid-cols-5 divide-x divide-solid divide-black font-bold text-center">
      <MenuHeadButton v-for="label in ['home', 'about me', 'menu', 'franchise', 'create']" :label="label"
        @click="clickMenuButton(label)" />
    </span>

    <span class="grid md:grid-cols-10 md:divide-x divide-y md:divide-y-0 divide-solid divide-black text-center">
      <div class="md:col-span-7 flex">
        <MenuCard :recipe="foodRecipes[0]" :size="CardSize.LARGE" @readMore="clickCardReadMore(foodRecipes[0].id)" />
      </div>
      <div class="md:col-span-3 flex flex-col divide-y divide-solid divide-black">
        <MenuCard :recipe="cocktailRecipes[0]" @readMore="clickCardReadMore(cocktailRecipes[0].id)" />
        <MenuCard :recipe="foodRecipes[0]" @readMore="clickCardReadMore(foodRecipes[0].id)" />
      </div>
    </span>

    <span class="grid md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-solid divide-black text-center">
      <MenuCard :recipe="cocktailRecipes[0]" @readMore="clickCardReadMore(cocktailRecipes[0].id)" />
      <MenuCard :recipe="foodRecipes[0]" @readMore="clickCardReadMore(foodRecipes[0].id)" />
      <MenuCard :recipe="foodRecipes[0]" @readMore="clickCardReadMore(foodRecipes[0].id)" />
    </span>

    <span class="grid md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-solid divide-black text-center">
      <MenuCard :recipe="cocktailRecipes[0]" @readMore="clickCardReadMore(cocktailRecipes[0].id)" />
      <MenuCard :recipe="foodRecipes[0]" @readMore="clickCardReadMore(foodRecipes[0].id)" />
      <MenuCard :recipe="foodRecipes[0]" @readMore="clickCardReadMore(foodRecipes[0].id)" />
    </span>

  </div>
</template>
