<script lang="ts" setup>
import { format } from 'date-fns';
import { CardSize, Recipe, RecipeType } from '@/types';
import { onImageError } from '@/core';

type HeadOptions = 'home' | 'about me' | 'food' | 'cocktail' | 'create';
type FilterValue = 'all' | RecipeType;

type MenuProps = {
  recipes: Recipe[];
}

const { recipes } = defineProps<MenuProps>();

const authUser = useUser();
const router = useRouter();
const filter = useState<FilterValue>('menu-filter', () => 'all');

function getRecipes(recipes: Recipe[], filterValue: FilterValue = filter.value){
  return recipes.filter((r) => filterValue === 'all' ? true : r.type === filter.value);
}

const filteredRecipes = useState<Recipe[]>('filter-recipe', () => getRecipes(recipes));
const { photoURL, providerData: [{ displayName, email }] } = authUser.value;

function clickMenuButton(label: HeadOptions) {
  if (label === 'create') {
    navigateTo('/recipe')
  }
  if (label === 'food') {
    filter.value = RecipeType.FOOD;
  }
  if (label === 'cocktail') {
    filter.value = RecipeType.COCKTAIL;
  }
  if (label === 'home') {
    filter.value = 'all';
  }
}

function clickCardReadMore(id: string) {
  navigateTo(`/recipe/${id}`);
}

watch(filter, (current) => {
  filteredRecipes.value = getRecipes(recipes,current);
})

const headerOptions: HeadOptions[] = ['home', 'about me', 'food', 'cocktail', 'create'];

</script>

<template>
  <div class="border border-black divide-y divide-solid divide-black">
    <span>
      <span class="sm:hidden grid grid-cols-5 justify-center items-center divide-x divide-black divide-solid">
        <div class="col-span-3 text-center text-sm my-1">
          <p>{{ format(new Date(), 'Pp') }}</p>
          <p class="uppercase text-2xl font-bold">{{ `${displayName}'s Recipes` }}</p>
        </div>
        <div class="col-span-2 flex justify-center items-center space-x-3">
          <img :src="photoURL" class="w-6 h-6 rounded-full" @error="onImageError"/>
          <div class="flex flex-col justify-center items-center font-bold capitalize">
            <p>last update:</p>
            <p class="text-xs italic">{{ format(new Date(), 'Pp') }}</p>
          </div>
        </div>
      </span>
      <span class="hidden sm:grid grid-cols-5 divide-x divide-solid divide-black">
        <div class="flex justify-center items-center">
          <img :src="photoURL" class="w-16 h-16 rounded-full m-auto" @error="onImageError" />
        </div>
        <div class="col-span-3 text-center p-5">
          <p>{{ format(new Date(), 'Pp') }}</p>
          <p class="uppercase text-4xl font-bold">{{ `${displayName}'s Recipes` }}</p>
        </div>
        <div class="flex flex-col justify-center items-center font-bold">
          <p>Last Update:</p>
          <p class="text-xs italic">{{ format(new Date(), 'Pp') }}</p>
        </div>
      </span>
    </span>

    <span class="grid grid-cols-5 divide-x divide-solid divide-black font-bold text-center">
      <MenuHeadButton v-for="label in headerOptions"
        :label="label" @click="clickMenuButton(label)" :active="filter === label || (filter === 'all' && label === 'home')" />
    </span>

    <span class="grid md:grid-cols-10 md:divide-x divide-y md:divide-y-0 divide-solid divide-black text-center">
      <div class="md:col-span-7 flex">
        <MenuCard v-if="filteredRecipes[0]" :recipe="filteredRecipes[0]" :size="CardSize.LARGE"
          @readMore="clickCardReadMore(filteredRecipes[0].id)" />
      </div>
      <div class="md:col-span-3 flex flex-col divide-y divide-solid divide-black">
        <span v-for="_, n in new Array(2)">
          <MenuCard v-if="filteredRecipes[n + 1]" :recipe="filteredRecipes[n + 1]"
            @readMore="clickCardReadMore(filteredRecipes[n + 1].id)" />
        </span>
      </div>
    </span>

    <span v-for="_, j in new Array(Math.ceil(filteredRecipes.slice(2).length / 3))"
      class="grid md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-solid divide-black text-center">
      <span v-for="_, k in new Array(3)">
        <MenuCard v-if="filteredRecipes[(j + 1) * 3 + k]" :recipe="filteredRecipes[(j + 1) * 3 + k]"
          @readMore="clickCardReadMore(filteredRecipes[(j + 1) * 3 + k].id)" />
      </span>
    </span>
  </div>
</template>
