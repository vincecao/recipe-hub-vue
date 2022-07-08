<script lang="ts" setup>
import { Profile, Recipe, RecipeType } from '@/types'

const profile: Profile = {
  image: 'https://avatars.githubusercontent.com/u/17363908?v=4',
  fullName: 'Lineng CAO',
  displayName: 'Vince',
  gender: "male",
  location: "San Francisco, CA",
  createAt: new Date()
}

const recipes: Recipe[] = [{
  title: "Food Salmon Teriyaki Fish",
  id: 'food-salmon-teriyaki-fish',
  description: "xxxxxxx",
  imagesSrc: ['https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg'],
  markdownSrc: "",
  type: RecipeType.FOOD,
},
{
  title: "Alcohol Beverage Cocktail Cold",
  id: 'alcohol-beverage-cocktail-cold',
  description: "xxxxxxx",
  imagesSrc: ['https://cdn.pixabay.com/photo/2016/11/23/14/49/alcohol-1853327_1280.jpg'],
  markdownSrc: "",
  type: RecipeType.COCKTAIL,
}]

const authUser = useUser();

</script>

<template>
  <div class="max-w-6xl m-auto container bg-orange-50 sm:p-8 p-0 md:my-5 shadow-2xl">
    <span class="flex justify-end">
      <UserLoginButton v-if="!authUser" />
      <UserLogoutButton v-if="authUser" />
    </span>
    <Menu v-if="!!authUser" :user="authUser" :recipes="recipes" />
  </div>
</template>
